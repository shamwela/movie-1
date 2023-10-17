import { Body, Controller, Post } from '@nestjs/common'
import { CreateMovieDto } from './dto/create-movie.dto'
import { MovieService } from './movie.service'

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto) {
    return await this.movieService.create(createMovieDto)
  }
}
