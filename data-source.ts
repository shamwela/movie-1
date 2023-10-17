import { DataSource } from 'typeorm'
import { User } from './src/user/user.entity'
import { Movie } from './src/movie/movie.entity'

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'movie-1',
  synchronize: true,
  // You can't auto-load here.
  // You should manually add all entities.
  entities: [User, Movie],
  migrations: ['src/database/migrations/**'],
})
