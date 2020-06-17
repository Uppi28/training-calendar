import { Component, OnInit } from '@angular/core';
import { traineeList } from "./traineeList";

@Component({
  selector: 'app-trainees',
  templateUrl: './trainees.component.html',
  styleUrls: ['./trainees.component.scss']
})
export class TraineesComponent implements OnInit {

  constructor() { }

  trainees = traineeList;

  ngOnInit(): void {
    console.log(traineeList);
    
  }

}
