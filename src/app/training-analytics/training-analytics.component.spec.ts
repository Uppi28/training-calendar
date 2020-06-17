import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAnalyticsComponent } from './training-analytics.component';

describe('TrainingAnalyticsComponent', () => {
  let component: TrainingAnalyticsComponent;
  let fixture: ComponentFixture<TrainingAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
