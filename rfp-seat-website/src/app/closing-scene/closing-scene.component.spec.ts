import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingSceneComponent } from './closing-scene.component';

describe('ClosingSceneComponent', () => {
  let component: ClosingSceneComponent;
  let fixture: ComponentFixture<ClosingSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
