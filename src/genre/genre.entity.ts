import { Column, Entity, ManyToMany } from 'typeorm'
import { MainEntity } from '../common/main.entity'
import { Movie } from '../movie/movie.entity'

@Entity()
export class Genre extends MainEntity {
  @Column({ unique: true })
  name: string

  @ManyToMany(
    // Type
    () => Movie,
    // What column?
    (movie) => movie.genres,
  )
  movies: Movie[]
}
