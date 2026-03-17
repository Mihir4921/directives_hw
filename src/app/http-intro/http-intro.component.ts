import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DemoDataService } from './demo-data.service';
import {
  from,
  fromEvent,
  fromEventPattern,
  interval,
  map,
  Observable,
  of,
  Subscription,
  take,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-http-intro',
  templateUrl: './http-intro.component.html',
  styleUrl: './http-intro.component.scss',
})
export class HttpIntroComponent implements OnDestroy, OnInit, AfterViewInit {
  sub: Subscription | null = null;

  todoList: any[] = [];
  todoObs: Observable<any> | undefined;

  @ViewChild('btn') btn: ElementRef | undefined;
  obsFromOperators = interval(1000);

  constructor(private dataService: DemoDataService) {
    this.todoObs = this.dataService.getSampleData();
  }
  getTodos() {
    this.sub = this.dataService.getSampleData().subscribe();
    console.log(this.sub);
  }

  ngAfterViewInit(): void {
    const elem = this.btn?.nativeElement;
    const clickEvent = fromEvent(elem, 'click');
    this.obsFromOperators.pipe(takeUntil(clickEvent)).subscribe((val) => {
      console.log(val);
    });
  }

  ngOnInit(): void {
    this.obsFromOperators
      ?.pipe(
        map((x) => 10 * x),
        take(5),
      )
      .subscribe((val) => {
        console.log(val);
      });

    of([1, 2, 3]).subscribe((val) => {
      console.log(val);
    });
    from([1, 2, 3]).subscribe((val) => {
      console.log(val);
    });

    // this.obsFromOperators.subscribe((val) => {  console.log(val);});

    this.dataService.localObs.subscribe(
      (val) => {
        console.log(val);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('Completed.');
      },
    );
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
