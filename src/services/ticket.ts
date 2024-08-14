import { Injectable } from '@nestjs/common';
import { PrismaService } from '.';
import { Prisma, type Ticket } from '@prisma/client';

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
