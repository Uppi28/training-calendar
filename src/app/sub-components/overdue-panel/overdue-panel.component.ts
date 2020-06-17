import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overdue-panel',
  templateUrl: './overdue-panel.component.html',
  styleUrls: ['./overdue-panel.component.scss']
})
export class OverduePanelComponent implements OnInit {

  constructor() { }

  trainings = [{
    label : "US Training on Promotion",
    trainer : "Alex Mandrake"
  },
  {
    label : "US Training on CIA 2021",
    trainer : "Alex Mandrake"
  },
  {
    label : "US Training on Engagement",
    trainer : "Alex Mandrake"
  },
  {
    label : "US Training on Pharma Science",
    trainer : "Alex Mandrake"
  },
  {
    label : "US Code of Ethics Training and Annual Disclosure",
    trainer : "Alex Mandrake"
  },
  {
    label : "US Training on Promotion",
    trainer : "Alex Mandrake"
  }]

  ngOnInit(): void {
  }

}
