import { Column, Entity } from 'typeorm'
import { MainEntity } from '../common/main.entity'

@Entity()
export class Genre extends MainEntity {
  @Column({ unique: true })
  name: string
}
