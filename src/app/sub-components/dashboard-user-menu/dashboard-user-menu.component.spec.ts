import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserMenuComponent } from './dashboard-user-menu.component';

describe('DashboardUserMenuComponent', () => {
  let component: DashboardUserMenuComponent;
  let fixture: ComponentFixture<DashboardUserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUserMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
