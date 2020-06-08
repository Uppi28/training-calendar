import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTrainingPanelComponent } from './my-training-panel.component';

describe('MyTrainingPanelComponent', () => {
  let component: MyTrainingPanelComponent;
  let fixture: ComponentFixture<MyTrainingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTrainingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTrainingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
