import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Ticket } from 'src/models/ticket';
import { TicketService } from 'src/services/ticket';
import { NewTicketInput } from 'src/dto/newTicket.input';

@Resolver(of => Ticket)
export class TicketResolver {
    constructor(
        private TicketService: TicketService
    ) {}

    @Query(returns => [Ticket])
    async readAllTickets() {
        return this.TicketService.readAll({});
    }

    @Query(returns => Ticket)
    async readTicket(@Args('id', { type: () => Int }) id: number) {
        return this.TicketService.readById(id);
    }

    @Mutation(returns => Ticket)
    async createTicket(
        @Args('data', { type: () => NewTicketInput }) data: Ticket,
    ) {
        return this.TicketService.create(data);
    }

    @Mutation(returns => Ticket) 
    async deleteTicket(@Args('id', { type: () => Int }) id: number) {
        return this.TicketService.remove(id);
    }

    @Mutation(returns => Ticket)
    async updateTicket(
        @Args('id', { type: () => Int }) id: number,
        @Args('data', { type: () => NewTicketInput }) data: Ticket
    ) {
        return this.TicketService.update(id, data);
    }
}