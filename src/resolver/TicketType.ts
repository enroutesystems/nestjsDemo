import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TicketType } from 'src/models/ticketType';
import { TicketTypeService } from 'src/services/ticketType';
import { type TicketType as TicketTypeT } from '@prisma/client';
import { NewTicketTypeTicket } from 'src/dto/newTicketType.input';

type TicketTypeInput = Omit<TicketTypeT, 'id'>;

@Resolver(of => TicketType)
export class TicketTypeResolver {
    constructor(
        private ticketTypeService: TicketTypeService
    ) {}

    @Query(returns => [TicketType])
    async readAllTicketTypes() {
        return this.ticketTypeService.readAll({});
    }

    @Query(returns => TicketType)
    async readTicketType(@Args('id', { type: () => Int }) id: number) {
        return this.ticketTypeService.readById(id);
    }

    @Mutation(returns => TicketType)
    async createTicketType(@Args('data', { type: () => NewTicketTypeTicket }) data: TicketTypeInput) {
        return this.ticketTypeService.create(data);
    }

    @Mutation(returns => TicketType) 
    async deleteTicketType(@Args('id', { type: () => Int }) id: number) {
        return this.ticketTypeService.remove(id);
    }

    @Mutation(returns => TicketType)
    async updateTicketType(
        @Args('id', { type: () => Int }) id: number,
        @Args('data', { type: () => NewTicketTypeTicket }) data: TicketTypeInput
    ) {
        return this.ticketTypeService.update(id, data);
    }
}