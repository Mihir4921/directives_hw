import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpIntroComponent } from './http-intro.component';

describe('HttpIntroComponent', () => {
  let component: HttpIntroComponent;
  let fixture: ComponentFixture<HttpIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpIntroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
