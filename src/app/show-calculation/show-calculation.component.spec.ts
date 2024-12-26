import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCalculationComponent } from './show-calculation.component';

describe('ShowCalculationComponent', () => {
  let component: ShowCalculationComponent;
  let fixture: ComponentFixture<ShowCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCalculationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
