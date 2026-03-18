import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'https://jsonplaceholder.typicode.com/users';
  localSub = new Subject<User[]>();

  favoriteList: User[] = [];

  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get<User[]>(this.url);
  }

  emitUserData(favUser: User) {
    this.favoriteList.push(favUser);
    this.localSub.next(this.favoriteList);
  }

  modifyAndEmitFavoriteData(checkUser: User) {
    if (this.checkInFavorites(checkUser.id)) {
      const updatedList = this.favoriteList.filter(
        (item) => item.id != checkUser.id,
      );
      this.favoriteList = updatedList;
    } else {
      this.favoriteList.push(checkUser);
    }
    this.localSub.next(this.favoriteList);
  }

  checkInFavorites(userId: number) {
    return this.favoriteList.some((user) => user.id == userId);
  }
}
