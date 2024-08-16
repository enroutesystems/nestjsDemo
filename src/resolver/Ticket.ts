import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Ticket } from 'src/models/ticket';
import { TicketService } from 'src/services/ticket';
import { NewTicketInput } from 'src/dto/newTicket.input';
import { TicketTypeService } from 'src/services/ticketType';

@Resolver(of => Ticket)
export class TicketResolver {
    constructor(
        private TicketService: TicketService,
        private TicketTypeService: TicketTypeService,
    ) {}

    private async getTypeData(ticket: Ticket) {
        const { type, ...otherProps} = ticket;
        const typeData = await this.TicketTypeService.readById(type);
        return {
            ...otherProps,
            type: typeData,
        };
    }

    @Query(returns => [Ticket])
    async readAllTickets() {
        return this.TicketService.readAll({})
            .then(
                (tickets) => tickets.map(
                    (ticket) => this.getTypeData(ticket)
                )
            );
    }

    @Query(returns => Ticket)
    async readTicket(@Args('id', { type: () => Int }) id: number) {
        return this.TicketService.readById(id)
            .then((ticket) => this.getTypeData(ticket));
    }

    @Mutation(returns => Ticket)
    async createTicket(
        @Args('data', { type: () => NewTicketInput }) data: Ticket,
    ) {
        return this.TicketService.create(data)
            .then((ticket) => this.getTypeData(ticket));
    }

    @Mutation(returns => Ticket) 
    async deleteTicket(@Args('id', { type: () => Int }) id: number) {
        return this.TicketService.remove(id)
            .then((ticket) => this.getTypeData(ticket));;
    }

    @Mutation(returns => Ticket)
    async updateTicket(
        @Args('id', { type: () => Int }) id: number,
        @Args('data', { type: () => NewTicketInput }) data: Ticket
    ) {
        return this.TicketService.update(id, data)
            .then((ticket) => this.getTypeData(ticket));
    }
}