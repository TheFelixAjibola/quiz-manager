import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class SearchMovieDto {
  @ApiProperty({ description: 'What do you want to search?', example: 'Wo' })
  @IsNotEmpty()
  @Length(2, 255)
  text: string;
}
