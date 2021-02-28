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
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  getAll(): Produto[] {
    return this.produtosService.getAll();
  }

  @Get(':id')
  get(@Param() params): Produto {
    return this.produtosService.get(params.id);
  }

  @Post()
  store(@Body() body: Produto) {
    console.log('produtors.store body : ', body);
    const produto = { id: Math.random(), ...body };
    return this.produtosService.store(produto);
  }

  @Put()
  update(@Body() body: Produto): Produto {
    console.log('produtors.update body : ', body);
    return this.produtosService.update(body);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.produtosService.delete(params.id);
  }
}
