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
  getAll(): Livro[] {
    return this.livrosService.getAll();
  }

  @Get(':id')
  get(@Param() params): Livro {
    return this.livrosService.get(params.id);
  }

  @Post()
  store(@Body() body: Livro) {
    const livro = { id: Math.random(), ...body };
    // return this.livrosService.store(livro);
  }

  @Put()
  update(@Body() body: Livro): Livro {
    return this.livrosService.update(body);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.livrosService.delete(params.id);
  }
}
