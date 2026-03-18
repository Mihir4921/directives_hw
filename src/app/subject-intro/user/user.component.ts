import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { User, UserService } from '../user.service';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit, AfterViewInit {
  @ViewChild('searchBar') inputBar: ElementRef | undefined;

  userDataList: User[] = [];
  toDisplayList: User[] = [];

  constructor(private dataService: UserService) {}

  ngOnInit(): void {
    this.getAllUserData();
  }

  ngAfterViewInit(): void {
    this.handleSearch();
  }

  handleSearch() {
    fromEvent(this.inputBar?.nativeElement, 'keyup')
      .pipe(debounceTime(500))
      .subscribe({
        next: (event: any) => {
          const toCheck = event.target.value.trim().toLowerCase();
          if (toCheck) {
            this.toDisplayList = this.userDataList.filter((user) =>
              user.name.toLowerCase().startsWith(toCheck),
            );
          } else {
            this.toDisplayList = this.userDataList;
          }
        },
      });
  }

  toggleFavoriteItem(givenUser: User) {
    this.dataService.modifyAndEmitFavoriteData(givenUser);
  }

  getAllUserData() {
    this.dataService.getUserData().subscribe({
      next: (val) => {
        console.log(val);
        this.userDataList = val;
        this.toDisplayList = val;
      },
    });
  }

  isInFavorites(toCheckId: number) {
    return this.dataService.checkInFavorites(toCheckId);
  }
}
