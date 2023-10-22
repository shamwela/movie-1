import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { GenreService } from './genre.service'
import { CreateGenreDto } from './dto/create-genre.dto'
import { UpdateGenreDto } from './dto/update-genre.dto'

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  async create(@Body() createGenreDto: CreateGenreDto) {
    await this.genreService.create(createGenreDto)
  }

  @Get()
  async findAll() {
    return await this.genreService.findAll()
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    await this.genreService.findOne(id)
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateGenreDto: UpdateGenreDto,
  ) {
    await this.genreService.update(id, updateGenreDto)
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.genreService.delete(id)
  }
}
