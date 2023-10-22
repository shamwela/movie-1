import { MainEntity } from '../common/main.entity'
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm'
import { Genre } from '../genre/genre.entity'

@Entity()
export class Movie extends MainEntity {
  @Column()
  name: string

  @ManyToMany(
    // Type
    () => Genre,
    // What column?
    (genre) => genre.movies,
  )
  @JoinTable()
  genres: Genre[]
}
