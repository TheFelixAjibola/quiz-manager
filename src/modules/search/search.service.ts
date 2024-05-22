import { Injectable } from '@nestjs/common';
import MeiliSearch, { Index, SearchParams } from 'meilisearch';

@Injectable()
export class SearchService {
  private _client: MeiliSearch;
  constructor() {
    this._client = new MeiliSearch({
      host: 'http://127.0.0.1:7700/',
    });
  }

  private getMovieIndex(): Index {
    return this._client.index('movies');
  }

  public async addDocuments(documents) {
    const index = this.getMovieIndex();
    return await index.addDocuments(documents);
  }

  public async search(text: string, searchParams?: SearchParams) {
    const index = this.getMovieIndex();
    return await index.search(text, searchParams);
  }
}
