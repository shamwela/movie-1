import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Genre } from './genre.entity'
import { Repository } from 'typeorm'
import { CreateGenreDto } from './dto/create-genre.dto'
import { UpdateGenreDto } from './dto/update-genre.dto'

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
  ) {}

  async create(createGenreDto: CreateGenreDto) {
    await this.genreRepository.insert(createGenreDto)
  }

  async findAll() {
    return await this.genreRepository.findAndCount()
  }

  async findOne(id: string) {
    const foundGenre = await this.genreRepository.findOne({ where: { id } })
    if (foundGenre) return foundGenre
    throw new NotFoundException(`Did not find genre with the ID ${id}.`)
  }

  async update(id: string, updateGenreDto: UpdateGenreDto) {
    return await this.genreRepository.update(id, updateGenreDto)
  }

  async delete(id: string) {
    return await this.genreRepository.softDelete(id)
  }
}
