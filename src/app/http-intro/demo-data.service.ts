import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoDataService {
  private url: string = 'https://jsonplaceholder.typicode.com/todos';

  localObs: Observable<number> = new Observable((observer) => {
    // observer: who subscribed to this observable
    console.log('Start');
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
    observer.error('error here');
  });

  // 0. Import the httpclient module in the root module
  // 1. Inject the HttpClient service
  constructor(private http: HttpClient) {}
  // 2. A method to make a Http request.
  getSampleData() {
    return this.http.get(this.url);
  }
}
