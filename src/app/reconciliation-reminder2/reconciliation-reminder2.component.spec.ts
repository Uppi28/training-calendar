import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconciliationReminder2Component } from './reconciliation-reminder2.component';

describe('ReconciliationReminder2Component', () => {
  let component: ReconciliationReminder2Component;
  let fixture: ComponentFixture<ReconciliationReminder2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconciliationReminder2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconciliationReminder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
