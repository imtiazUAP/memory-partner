import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../../entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
      ) {}

      async findOne(data: number | any): Promise<Users | undefined> {
        return await this.usersRepository.findOneBy(data);
      }
    
      async create(data: any)  {
        return await this.usersRepository.save(data).then(res => res).catch(e => console.log(e));
      }
}
