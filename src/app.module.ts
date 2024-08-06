import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';

@Module({

  imports: [

    GraphQLModule.forRoot<ApolloDriverConfig>({

      driver: ApolloDriver,

      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),

    }),

    TodoModule

  ],

  providers: [PrismaService],

})
export class AppModule { }
