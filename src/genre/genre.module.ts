import { Module } from '@nestjs/common'
import { GenreService } from './genre.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Genre } from './genre.entity'
import { GenreController } from './genre.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Genre])],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
