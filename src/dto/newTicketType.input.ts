import { Field, InputType } from '@nestjs/graphql';
import { TicketType } from '@prisma/client';

// id is autoincremental so is not required
type TicketTypeWithoutId = Omit<TicketType, 'id'>;

@InputType()
export class NewTicketTypeTicket implements TicketTypeWithoutId {
    @Field()
    name: string;
}
