import { Body, Controller, Get, Post } from '@nestjs/common';
import { SearchService } from '../search.service';
import { ApiTags } from '@nestjs/swagger';
import { SearchMovieDto } from '../dto/search-movie.dto';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  // Add Dependency Injection
  constructor(private readonly searchService: SearchService) {}

  @Get('/')
  public async getSearch(): Promise<void> {
    await this.searchService.addDocuments([
      { id: 1, title: 'Carol', genres: ['Romance', 'Drama'] },
      { id: 2, title: 'Wonder Woman', genres: ['Action', 'Adventure'] },
      { id: 3, title: 'Life of Pie', genres: ['Adventure', 'Drama'] },
      {
        id: 4,
        title: 'Mad Max: Fury Road',
        genres: ['Adventure', 'Science Fiction'],
      },
      { id: 5, title: 'Moana', genres: ['Fantasy', 'Action'] },
      { id: 6, title: 'Philadelphia', genres: ['Drama'] },
      { id: 7, title: 'Introducing The Kujus', genres: ['Drama'] },
      { id: 8, title: 'The Kujus Again', genres: ['Drama'] },
    ]);
  }

  @Post('/')
  public async SearchMovies(@Body() search: SearchMovieDto) {
    const findMovie = this.searchService.search(search.text, {
      attributesToHighlight: ['title'],
    });

    return await findMovie;
  }
}
