import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StarWarsApiService } from './star-wars-api.service';
import { map, Observable } from 'rxjs';

export interface FilmData {
  title: string;
  year: number;
}

@Component({
  selector: 'app-star-wars-search',
  templateUrl: './star-wars-search.component.html',
  styleUrl: './star-wars-search.component.scss',
})
export class StarWarsSearchComponent {
  characterName = new FormControl('');
  filmsUrlList = [];
  filmDataList: FilmData[] = [];

  constructor(private dataService: StarWarsApiService) {}

  performSearch() {
    if (this.characterName.value) {
      this.dataService
        .getSearchData(this.characterName.value)
        .subscribe((response) => {
          this.filmsUrlList = response;

          this.filmsUrlList.forEach((filmUrl) => {
            this.dataService.getFilmData(filmUrl).subscribe((val: any) => {
              const movieYear = new Date(val.release_date);
              this.filmDataList.push({
                title: val.title,
                year: movieYear.getFullYear(),
              });
            });
          });
        });
    }
  }
}
