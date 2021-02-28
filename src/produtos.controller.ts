import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  getAll(): string {
    return 'Listar todos produtos';
  }

  @Get(':id')
  get(@Param() params): string {
    return `Lista profuto ${params.id}`;
  }

  @Post()
  store(@Body() body): string {
    console.log('produtors.store body : ', body);
    return 'Criar produto';
  }

  @Put()
  edit(@Body() body): string {
    console.log('produtors.edit body : ', body);
    return 'Editar produto';
  }

  @Delete(':id')
  delete(@Param() params): string {
    return `Delete produto ${params.id}`;
  }
}
