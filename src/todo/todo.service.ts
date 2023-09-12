import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createTodoInput: CreateTodoInput) {

    return await this.prisma.todo.create({ data: { title: createTodoInput.title } })

  }

  async findAll() {

    return await this.prisma.todo.findMany()

  }

  async findOne(id: number) {

    const user = await this.prisma.todo.findUnique({ where: { id: id } })

    return user

  }

  async update(id: number, updateTodoInput: UpdateTodoInput) {

    const todo = await this.prisma.todo.update({ where: { id: id }, data: { title: updateTodoInput.title } })

    return todo

  }

  async remove(id: number) {

    return await this.prisma.todo.delete({ where: { id } })

  }
}
