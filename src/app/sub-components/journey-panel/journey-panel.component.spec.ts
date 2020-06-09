import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyPanelComponent } from './journey-panel.component';

describe('JourneyPanelComponent', () => {
  let component: JourneyPanelComponent;
  let fixture: ComponentFixture<JourneyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
