import { Component, OnInit } from '@angular/core';
import { HackerDataService } from './hacker-data.service';

@Component({
  selector: 'app-hacker-job-board',
  templateUrl: './hacker-job-board.component.html',
  styleUrl: './hacker-job-board.component.scss',
})
export class HackerJobBoardComponent implements OnInit {
  showJobs: any[] = [];
  startIndex = 0;

  constructor(private dataService: HackerDataService) {}

  ngOnInit(): void {
    this.getJobs();
  }

  loadMore() {
    this.getJobs();
  }

  getJobs() {
    this.startIndex += this.showJobs.length;
    this.dataService.getJobData(this.startIndex).subscribe((response) => {
      this.showJobs = response;
    });
  }
}
