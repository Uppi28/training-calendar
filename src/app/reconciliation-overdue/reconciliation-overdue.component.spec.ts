import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconciliationOverdueComponent } from './reconciliation-overdue.component';

describe('ReconciliationOverdueComponent', () => {
  let component: ReconciliationOverdueComponent;
  let fixture: ComponentFixture<ReconciliationOverdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconciliationOverdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconciliationOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
