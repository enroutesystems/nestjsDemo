import { Injectable } from '@nestjs/common';
import { PrismaService } from '.';
import { TicketType, Prisma } from '@prisma/client';

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

    async findUnique(
        where: Prisma.TicketTypeWhereUniqueInput
    ): Promise<TicketType | null> {
        return this.prisma.ticketType.findUnique({
            where,
        });
    }

    async findMany(params: TicketTypeFindManyParams): Promise<TicketType[]> {
        return this.prisma.ticketType.findMany({
            ...params
        });
    }

    async create(data: Prisma.TicketTypeCreateInput) {
        return this.prisma.ticketType.create({
            data,
        });
    }

    async update(params: {
        where: Prisma.TicketTypeWhereUniqueInput;
        data: Prisma.TicketTypeUpdateInput;
    }): Promise<TicketType> {
        return this.prisma.ticketType.update({
            ...params,
        });
    }

    async delete(where: Prisma.TicketTypeWhereUniqueInput): Promise<TicketType> {
        return this.prisma.ticketType.delete({
            where,
        });
    }
}