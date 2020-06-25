import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconciliationTrackerComponent } from './reconciliation-tracker.component';

describe('ReconciliationTrackerComponent', () => {
  let component: ReconciliationTrackerComponent;
  let fixture: ComponentFixture<ReconciliationTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconciliationTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconciliationTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
