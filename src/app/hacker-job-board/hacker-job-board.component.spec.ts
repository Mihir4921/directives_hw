import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerJobBoardComponent } from './hacker-job-board.component';

describe('HackerJobBoardComponent', () => {
  let component: HackerJobBoardComponent;
  let fixture: ComponentFixture<HackerJobBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HackerJobBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HackerJobBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
