import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsSearchComponent } from './star-wars-search.component';

describe('StarWarsSearchComponent', () => {
  let component: StarWarsSearchComponent;
  let fixture: ComponentFixture<StarWarsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarWarsSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarWarsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
