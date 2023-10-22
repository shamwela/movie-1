import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from 'class-validator'

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  genreIds: string[]
}
