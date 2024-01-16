import {
  Param,
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MemoriesService } from './memories.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller('/memories')
export class MemoriesController {
  constructor(private readonly memoriesService: MemoriesService) {}

  @Post('/add')
  addMemory(@Body() addMemoryBodyParams: any): any {
    return this.memoriesService.addMemory(addMemoryBodyParams);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/list')
  getMemoryList(): any {
    return this.memoriesService.getMemoryList();
  }

  @Get('/:id')
  getMemoryDetail(@Param('id') id: number): any {
    return this.memoriesService.getMemoryDetail(id);
  }

  @Put('/:id')
  updateMemory(
    @Param('id') id: number,
    @Body() updateUserBodyParams: any,
  ): any {
    return this.memoriesService.updateMemoryById(
      id,
      updateUserBodyParams.title,
      updateUserBodyParams.description,
    );
  }

  @Delete('/:id')
  deleteMemory(@Param('id') id: number): any {
    return this.memoriesService.deleteMemoryById(id);
  }
}
