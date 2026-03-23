import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, concatMap, forkJoin, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HackerDataService {
  private jobPostingUrl: string =
    'https://hacker-news.firebaseio.com/v0/jobstories.json';
  private jobDetailBaseUrl: string =
    'https://hacker-news.firebaseio.com/v0/item/';

  constructor(private http: HttpClient) {}

  getJobData(startIndex: number) {
    return this.http.get<number[]>(this.jobPostingUrl).pipe(
      concatMap((idArr: number[]) => {
        const endIndex =
          startIndex + 6 <= idArr.length ? startIndex + 6 : idArr.length;
        return forkJoin(
          idArr.slice(startIndex, endIndex).map((id) => this.getJobDetails(id)),
        );
      }),
    );
  }

  getJobDetails(id: number) {
    return this.http.get(this.jobDetailBaseUrl + id + '.json');
  }
}
