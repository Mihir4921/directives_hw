import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private trainerDataList = [
    { name: 'JR', occ: 'trainer' },
    { name: 'David', occ: 'manager' },
    { name: 'Miranda', occ: 'trainer' },
    { name: 'Jake', occ: 'hr' },
  ];

  primitive: number = 1;

  get trainerData() {
    return this.trainerDataList;
  }

  addTrainerData(trainer: any) {
    this.trainerDataList.push(trainer);
  }
}
