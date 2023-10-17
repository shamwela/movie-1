import { MainEntity } from '../common/main.entity'
import { Entity, Column } from 'typeorm'

@Entity()
export class User extends MainEntity {
  @Column({ unique: true })
  email: string

  @Column()
  password: string
}
