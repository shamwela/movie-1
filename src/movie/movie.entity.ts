import { MainEntity } from '../common/main.entity'
import { Column, Entity } from 'typeorm'

@Entity()
export class Movie extends MainEntity {
  @Column()
  name: string
}
