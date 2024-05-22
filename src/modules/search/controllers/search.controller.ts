import { Body, Controller, Get, Post } from '@nestjs/common';
import { SearchService } from '../search.service';
import { ApiTags } from '@nestjs/swagger';
import { SearchMovieDto } from '../dto/search-movie.dto';
import { quizSampleData } from 'src/db/data/quiz.data';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  // Add Dependency Injection
  constructor(private readonly searchService: SearchService) {}

  @Get('/')
  public async getSearch() {
    const documents = [];

    for (let i = 0; i < quizSampleData.length; i++) {
      const { questions } = quizSampleData[i];

      for (let j = 0; j < questions.length; j++) {
        const { question } = questions[j];

        documents.push({
          id: `${i}${j}`,
          text: question,
        });
      }
    }

    return await this.searchService.addDocuments(documents);
  }

  @Post('/')
  public async SearchMovies(@Body() search: SearchMovieDto) {
    const findMovie = this.searchService.search(search.text, {
      attributesToHighlight: ['title'],
    });

    return await findMovie;
  }
}
