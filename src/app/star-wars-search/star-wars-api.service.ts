import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarsApiService {
  private searchBaseUrl: string = 'https://swapi.dev/api/people/?search=';
  filmUrls = [];

  constructor(private http: HttpClient) {}

  getSearchData(charName: string) {
    return this.http.get(this.searchBaseUrl + charName).pipe(
      map((val: any) => {
        this.filmUrls = val.results[0].films;
        return this.filmUrls;
      }),
    );
  }

  getFilmData(filmUrl: string) {
    return this.http.get(filmUrl);
  }
}
