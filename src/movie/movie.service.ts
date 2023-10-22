import { InjectRepository } from '@nestjs/typeorm'
import { CreateMovieDto } from './dto/create-movie.dto'
import { Injectable, NotFoundException } from '@nestjs/common'
import { Movie } from './movie.entity'
import { type Repository } from 'typeorm'
import { GenreService } from '../genre/genre.service'
import { UpdateMovieDto } from './dto/update-movie.dto'

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
    private readonly genreService: GenreService,
  ) {}

  async create({ name, genreIds }: CreateMovieDto) {
    const genres = await Promise.all(
      genreIds.map((genreId) => this.genreService.findOne(genreId)),
    )
    const newMovie = new Movie()
    newMovie.name = name
    newMovie.genres = genres
    await this.movieRepository.save(newMovie)
  }

  async findAll() {
    return await this.movieRepository.findAndCount({
      relations: { genres: true },
      order: { createdAt: 'DESC' },
    })
  }

  async findOne(id: string) {
    const foundMovie = await this.movieRepository.findOne({
      where: { id },
      relations: { genres: true },
    })
    if (foundMovie) return foundMovie
    throw new NotFoundException(`Did not find movie with the ID ${id}.`)
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    const movie = await this.findOne(id)
    const { name, genreIds } = updateMovieDto
    movie.name = name
    const genres = await Promise.all(
      genreIds.map((genreId) => this.genreService.findOne(genreId)),
    )
    movie.genres = genres
    await this.movieRepository.save(movie)
  }

  async delete(id: string) {
    await this.movieRepository.softDelete(id)
  }
}
