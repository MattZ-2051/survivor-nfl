import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private dataSource: DataSource,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async findOne(username: string): Promise<User> {
    return this.userRepo.findOneBy({ username });
  }

  getUsers(): string {
    return 'return all users!';
  }

  async createUser(username: string, password: string): Promise<User> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();
    const user = await this.userRepo.create({
      username,
      password,
    });
    try {
      await queryRunner.manager.save(user);
      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
      return user;
    }
  }
}
