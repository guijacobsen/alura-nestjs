import { Injectable } from '@nestjs/common';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  livros: Livro[] = [
    // new Livro('LIV01', 'Livro TDD e BDD na prática', 29.9),
    // new Livro('LIV02', 'Livro iniciando com Flutter', 39.9),
    // new Livro('LIV03', 'Inteligência artificial como serviço', 29.9),
  ];

  getAll(): Livro[] {
    return this.livros;
  }

  get(id: number): Livro {
    return this.livros[0];
  }

  store(livro: Livro) {
    this.livros.push(livro);
  }

  update(livro: Livro) {
    return livro;
  }

  delete(id: number) {
    this.livros.pop();
  }
}
