import { Module } from '@nestjs/common';
import { TicketService } from './services/ticket';
import { TicketTypeService } from './services/ticketType';
import { PrismaService } from './services';
import { GraphQLModule } from '@nestjs/graphql';
import {  
  ApolloDriver,
  type ApolloDriverConfig
} from '@nestjs/apollo';
import { TicketTypeResolver } from './resolver/TicketType';
import { TicketResolver } from './resolver/Ticket';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    })
  ],
  //controllers: [AppController],
  providers: [
    TicketTypeResolver,
    TicketResolver,
    PrismaService,
    TicketService,
    TicketTypeService
  ],
})
export class AppModule {}
