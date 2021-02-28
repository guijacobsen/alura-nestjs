import { Injectable } from '@nestjs/common';
import { Produto } from './produto.model';

@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Produto('LIV02', 'Livro iniciando com Flutter', 39.9),
    new Produto('LIV03', 'Inteligência artificial como serviço', 29.9),
  ];

  getAll(): Produto[] {
    return this.produtos;
  }

  get(id: number): Produto {
    return this.produtos[0];
  }

  store(produto: Produto) {
    this.produtos.push(produto);
  }

  update(produto: Produto) {
    return produto;
  }

  delete(id: number) {
    this.produtos.pop();
  }
}
