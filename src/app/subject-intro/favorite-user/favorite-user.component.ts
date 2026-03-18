import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-favorite-user',
  templateUrl: './favorite-user.component.html',
  styleUrl: './favorite-user.component.scss',
})
export class FavoriteUserComponent implements OnInit {
  favoriteList: User[] = [];

  constructor(private dataService: UserService) {}

  ngOnInit(): void {
    this.dataService.localSub.subscribe({
      next: (val) => {
        console.log(val);
        this.favoriteList = val;
      },
    });
  }

  removeFromFavorites(toRemoveUser: User) {
    this.dataService.modifyAndEmitFavoriteData(toRemoveUser);
  }
}
