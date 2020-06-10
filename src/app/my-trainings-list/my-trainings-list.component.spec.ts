import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTrainingsListComponent } from './my-trainings-list.component';

describe('MyTrainingsListComponent', () => {
  let component: MyTrainingsListComponent;
  let fixture: ComponentFixture<MyTrainingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTrainingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTrainingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
