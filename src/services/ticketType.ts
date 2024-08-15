import { Injectable } from '@nestjs/common';
import { PrismaService } from '.';
import { TicketType, Prisma } from '@prisma/client';
import { NewTicketTypeTicket } from 'src/dto/newTicketType.input';

export type TicketTypeFindManyParams = {
    skip?: number;
    take?: number;
    cursor?: Prisma.TicketTypeWhereUniqueInput;
    where?: Prisma.TicketTypeWhereInput;
    orderBy?: Prisma.TicketTypeOrderByWithRelationInput;
}

@Injectable()
export class TicketTypeService {
    constructor(private prisma: PrismaService) {}

    async create(data: NewTicketTypeTicket) {
        return this.prisma.ticketType.create({
            data
        })
    }

    async readById(id: number): Promise<TicketType> {
        return this.prisma.ticketType.findUnique({
            where: {
                id
            }
        });
    }

    async readAll(args: TicketTypeFindManyParams): Promise<Array<TicketType>> {
        return this.prisma.ticketType.findMany(args)
    }

    async remove(id: number): Promise<TicketType> {
        return this.prisma.ticketType.delete({
            where: {
                id,
            }
        });
    }

    async update(id: number, data: NewTicketTypeTicket): Promise<TicketType> {
        return this.prisma.ticketType.update({
            data,
            where: {
                id
            }
        })
    }
}
