import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  dataSource: any[] = ['a', 'b', 'c'];
  trainerList?: any[];
  logNumber?: number;

  constructor(private dataService: DataService) {
    this.trainerList = dataService.trainerData;
    this.logNumber = dataService.primitive;
  }

  onChildEventTriggered(eventValue: string) {
    window.alert(eventValue);
  }

  logParentData() {
    console.log(this.trainerList);
  }

  logParentNumber() {
    console.log(this.logNumber);
  }
}
