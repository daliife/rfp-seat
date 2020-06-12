import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarScrollerComponent } from './car-scroller.component';

describe('CarScrollerComponent', () => {
  let component: CarScrollerComponent;
  let fixture: ComponentFixture<CarScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
