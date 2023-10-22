import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { CreateMovieDto } from './dto/create-movie.dto'
import { MovieService } from './movie.service'
import { UpdateMovieDto } from './dto/update-movie.dto'

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto) {
    await this.movieService.create(createMovieDto)
  }

  @Get()
  async findAll() {
    return await this.movieService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.movieService.findOne(id)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    await this.movieService.update(id, updateMovieDto)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.movieService.delete(id)
  }
}
