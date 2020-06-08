import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverduePanelComponent } from './overdue-panel.component';

describe('OverduePanelComponent', () => {
  let component: OverduePanelComponent;
  let fixture: ComponentFixture<OverduePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverduePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverduePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
