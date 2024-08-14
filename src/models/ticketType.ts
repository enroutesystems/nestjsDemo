import { Field, Int, ObjectType } from '@nestjs/graphql';
import { type TicketType as TicketTypeT } from '@prisma/client';

@ObjectType()
export class TicketType implements TicketTypeT {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;
}
