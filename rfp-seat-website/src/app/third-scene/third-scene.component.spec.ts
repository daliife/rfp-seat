import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdSceneComponent } from './third-scene.component';

describe('ThirdSceneComponent', () => {
  let component: ThirdSceneComponent;
  let fixture: ComponentFixture<ThirdSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
