import { Injectable } from '@nestjs/common';

import { type NewTicketInput } from 'src/dto/newTicket.input';
import { ReadAllArgs } from 'src/dto/readAll.args';
import { Ticket } from 'src/models/ticket';

/**
@Injectable()
export class TicketService {
    constructor(private prisma: PrismaService) {}

    async findUnique(
        where: Prisma.TicketWhereUniqueInput
    ): Promise<Ticket | null> {
        return this.prisma.ticket.findUnique({
            where,
        });
    }

    async findMany(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.TicketWhereUniqueInput;
        where?: Prisma.TicketWhereInput;
        orderBy?: Prisma.TicketOrderByWithRelationInput;
    }): Promise<Ticket[]> {
        return this.prisma.ticket.findMany({
            ...params
        });
    }

    async create(data: Prisma.TicketCreateInput) {
        return this.prisma.ticket.create({
            data,
        });
    }

    async update(params: {
        where: Prisma.TicketWhereUniqueInput,
        data: Prisma.TicketUpdateInput,
    }): Promise<Ticket> {
        return this.prisma.ticket.update({
            ...params
        });
    }

    async delete(where: Prisma.TicketWhereUniqueInput): Promise<Ticket> {
        return this.prisma.ticket.delete({
            where,
        });
    } 
}
*/

@Injectable()
export class TicketService {
    async create(data: NewTicketInput) {
        return {} as Ticket;
    }

    async readById(id: string): Promise<Ticket> {
        return {} as Ticket;
    }

    async readAll(args: ReadAllArgs): Promise<Array<Ticket>> {
        return [] as Array<Ticket>
    }

    async remove(id: string): Promise<boolean> {
        return true;
    }
}
