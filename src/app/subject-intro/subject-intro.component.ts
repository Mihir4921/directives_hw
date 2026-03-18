import { Component, OnInit } from '@angular/core';
import { SharedDataService } from './shared-data.service';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-intro',
  templateUrl: './subject-intro.component.html',
  styleUrl: './subject-intro.component.scss',
})
export class SubjectIntroComponent implements OnInit {
  count = 0;
  // sub = new Subject();
  // sub = new BehaviorSubject(20);
  sub = new ReplaySubject(1);
  constructor(private dataService: SharedDataService) {}

  ngOnInit(): void {
    this.dataService.localSub.subscribe((data) => {
      console.log('in First Component, ', data);
    });

    this.sub.next(0);
    this.sub.subscribe((val) => {
      console.log('subscriber 1', val);
    });
    this.sub.next(1);
    this.sub.next(2);
    this.sub.next(3);
    this.sub.subscribe((val) => {
      console.log('subscriber 2', val);
    });
    this.sub.next(4);
    this.sub.next(5);
    this.sub.subscribe((val) => {
      console.log('subscriber 3', val);
    });
  }

  onClick() {
    this.count++;
    this.dataService.emitData(this.count);
  }
}
