import { InjectRepository } from '@nestjs/typeorm'
import { CreateMovieDto } from './dto/create-movie.dto'
import { Injectable } from '@nestjs/common'
import { Movie } from './movie.entity'
import { type Repository } from 'typeorm'

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    return await this.movieRepository.insert(createMovieDto)
  }
}
