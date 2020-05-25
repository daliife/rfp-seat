import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSceneComponent } from './first-scene.component';

describe('FirstSceneComponent', () => {
  let component: FirstSceneComponent;
  let fixture: ComponentFixture<FirstSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
