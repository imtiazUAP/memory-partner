import { Injectable } from '@nestjs/common';
import { Memories } from '../../entities/memories.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MemoriesService {
  constructor(
    @InjectRepository(Memories)
    private memoryRepository: Repository<Memories>,
  ) {}
  async addMemory(params: any): Promise<any> {
    const currentTime = Date();
    return await this.memoryRepository
      .createQueryBuilder()
      .insert()
      .into(Memories)
      .values([
        {
          user_id: params.user_id,
          title: params.title,
          description: params.description,
          created_at: currentTime.toString(),
          updated_at: currentTime.toString(),
          updated_by: params.updated_by,
        },
      ])
      .execute();
  }

  async getMemoryList(): Promise<any> {
    return await this.memoryRepository.find({
      order: {
        updated_at: 'DESC',
      },
    });
  }

  async getMemoryDetail(memoryId: number): Promise<any> {
    return await this.memoryRepository.findOneBy({ id: memoryId });
  }

  async updateMemoryById(memoryId: number, title: string, descriptionText: any): Promise<any> {
    const memory = await this.memoryRepository.findOneBy({ id: memoryId });
    const currentTime = Date();
    if (title) {
      memory.title = title;
    }
    if (descriptionText) {
      memory.description = descriptionText;
    }
    memory.updated_at = currentTime.toString();
    return await this.memoryRepository.save(memory);
  }

  async deleteMemoryById(id: number) {
    return await this.memoryRepository.delete(id);
  }
}
