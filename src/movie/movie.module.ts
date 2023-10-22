import { Module } from '@nestjs/common'
import { MovieController } from './movie.controller'
import { MovieService } from './movie.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Movie } from './movie.entity'
import { GenreModule } from '../genre/genre.module'

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), GenreModule],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
