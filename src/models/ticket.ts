import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TicketType as TicketTypeT, type Ticket as TicketT } from '@prisma/client';
import { TicketType } from './ticketType';

@ObjectType()
export class Ticket implements TicketT {
    @Field(type => Int)
    id: number;

    @Field({ nullable: true })
    description: string;

    @Field({ nullable: true })
    priority: number;

    @Field({ nullable: true  })
    severity: number;

    @Field(type => String)
    title: string;

    @Field(type => Int)
    type: number;
}
