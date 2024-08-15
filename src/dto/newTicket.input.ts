import { Field, InputType, Int } from '@nestjs/graphql';
import { Ticket as TicketT } from '@prisma/client';

// Id is autoincrementa so is not required
type TicketWithoutId = Omit<TicketT, 'id'>;

@InputType()
export class NewTicketInput implements TicketWithoutId {
    @Field({ nullable: true })
    description: string;

    @Field({ nullable: true })
    priority: number;

    @Field({ nullable: true})
    severity: number;

    @Field(type => String)
    title: string;

    @Field(type => Int)
    type: number;
}
