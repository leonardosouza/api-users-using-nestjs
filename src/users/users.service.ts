import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

const users: User[] = [];
let lastId = 0;

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    lastId += 1;
    const newUser: User = {
      id: lastId,
      ...createUserDto,
    };
    users.push(newUser);
    return newUser;
  }

  findAll() {
    return users;
  }

  findOne(id: number) {
    const user = users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  remove(id: number) {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    const removed = users.splice(index, 1)[0];
    return removed;
  }
}
