import { Injectable } from '@nestjs/common';
import { PrismaService } from '.';
import { Ticket, Prisma } from '@prisma/client';
import { NewTicketInput } from 'src/dto/newTicket.input';

export type TicketFindManyParams = {
    skip?: number;
    take?: number;
    cursor?: Prisma.TicketWhereUniqueInput;
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithRelationInput;
}

@Injectable()
export class TicketService {
    constructor(private prisma: PrismaService) {}

    async create(data: NewTicketInput) {
        return this.prisma.ticket.create({
            data
        })
    }

    async readById(id: number): Promise<Ticket> {
        return this.prisma.ticket.findUnique({
            where: {
                id
            }
        });
    }

    async readAll(args: TicketFindManyParams): Promise<Array<Ticket>> {
        return this.prisma.ticket.findMany(args)
    }

    async remove(id: number): Promise<Ticket> {
        return this.prisma.ticket.delete({
            where: {
                id,
            }
        });
    }

    async update(id: number, data: NewTicketInput): Promise<Ticket> {
        return this.prisma.ticket.update({
            data,
            where: {
                id
            }
        })
    }
}
