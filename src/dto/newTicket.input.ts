import { Field, InputType } from '@nestjs/graphql';
import { Ticket as TicketT } from '@prisma/client';
import { Ticket } from 'src/models/ticket';

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

    @Field()
    title: string;

    @Field(type => Ticket)
    type: number;
}
