import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  async getAll(): Promise<Livro[]> {
    return this.livrosService.getAll();
  }

  @Get(':id')
  async get(@Param() params): Promise<Livro> {
    return this.livrosService.get(params.id);
  }

  @Post()
  async store(@Body() body: Livro) {
    this.livrosService.store(body);
  }

  @Put()
  async update(@Body() body: Livro): Promise<[number, Livro[]]> {
    return this.livrosService.update(body);
  }

  @Delete(':id')
  async delete(@Param() params) {
    this.livrosService.delete(params.id);
  }
}
