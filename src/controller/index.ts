/**
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Ticket, TicketType } from '@prisma/client';
import { TicketService } from 'src/services/ticket';
import {
  type TicketTypeFindManyParams,
  TicketTypeService
} from 'src/services/ticketType';

@Controller()
export class AppController {
  constructor(
    private readonly TicketService: TicketService,
    private readonly TicketTypeService: TicketTypeService
  ) {}

  @Get('ticket/:id')
  async readTicketById(@Param('id') id: string): Promise<Ticket> {
    return this.TicketService.findUnique({ id: Number(id) });
  }

  @Get('ticketType/:id')
  async readTicketTypeById(@Param('id') id: string): Promise<TicketType> {
    return this.TicketTypeService.findUnique({ id: Number(id)});
  }

  @Get('ticketType')
  async readTicketType(@Body() data: TicketTypeFindManyParams): Promise<TicketType[]> {
    return this.TicketTypeService.findMany(data);
  }

  @Post('ticketType')
  async createTicket(@Body() data: {
    name: string,
  }): Promise<TicketType> {
    return this.TicketTypeService.create(data);
  }
}
*/