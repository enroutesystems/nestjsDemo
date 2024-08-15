import { Body } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { TicketType } from 'src/models/ticketType';
import { TicketService } from 'src/services/ticket';
import { TicketTypeService } from 'src/services/ticketType';


@Resolver(of => TicketType)
export class TicketResolver {
    constructor(
        private ticketService: TicketService,
        private ticketTypeService: TicketTypeService
    ) {}

    @Query((returns) => [TicketType])
    async readAllTicketTypes(
        @Body('skip') skip: number,
        @Body('take') take: number
    ) {
        return this.ticketTypeService.readAll({
            skip,
            take,
        });
    }
}