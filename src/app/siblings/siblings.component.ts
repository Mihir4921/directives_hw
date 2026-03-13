import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-siblings',
  templateUrl: './siblings.component.html',
  styleUrl: './siblings.component.scss',
})
export class SiblingsComponent {
  constructor(private dataService: DataService) {}

  getData() {
    console.log(this.dataService.trainerData);
  }

  updateData() {
    this.dataService.addTrainerData({ name: 'Luke', occ: 'assistant' });
  }

  getNumber() {
    console.log(this.dataService.primitive);
  }

  updateNumber() {
    this.dataService.primitive = 5;
  }
}
