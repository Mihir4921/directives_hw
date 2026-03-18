import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.scss',
})
export class SecondComponentComponent {
  localVal: number | undefined;

  constructor(private dataService: SharedDataService) {}

  ngOnInit(): void {
    this.dataService.localSub.subscribe((data: number) => {
      this.localVal = data;
      console.log('in Second Component, ', data);
    });
  }
}
