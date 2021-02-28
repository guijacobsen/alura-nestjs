import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Produto('LIV02', 'Livro iniciando com Flutter', 39.9),
    new Produto('LIV03', 'Inteligência artificial como serviço', 29.9),
  ];

  @Get()
  getAll(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  get(@Param() params): Produto {
    return this.produtos[0];
  }

  @Post()
  store(@Body() body: Produto): Produto {
    console.log('produtors.store body : ', body);
    const produto = { id: Math.random(), ...body };
    this.produtos.push(produto);

    return this.produtos[this.produtos.length - 1];
  }

  @Put()
  edit(@Body() body: Produto): Produto {
    console.log('produtors.edit body : ', body);
    return body;
  }

  @Delete(':id')
  delete(@Param() params) {
    this.produtos.pop();
  }
}
