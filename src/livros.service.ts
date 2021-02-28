import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  constructor(@InjectModel(Livro) private livroModel: typeof Livro) {}

  async getAll(): Promise<Livro[]> {
    return this.livroModel.findAll();
  }

  async get(id: number): Promise<Livro> {
    return this.livroModel.findByPk(id);
  }

  async store(livro: Livro) {
    this.livroModel.create(livro);
  }

  async update(livro: Livro): Promise<[number, Livro[]]> {
    return this.livroModel.update(livro, {
      where: {
        id: livro.id,
      },
    });
  }

  async delete(id: number) {
    try {
      const livro: Livro = await this.get(id);
      if (livro) livro.destroy();
    } catch (error) {
      console.log('LivrosService.delete error : ', error);
    }
  }
}
