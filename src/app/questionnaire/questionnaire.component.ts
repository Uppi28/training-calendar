import { Component, OnInit } from '@angular/core';
import { questions } from "../../assets/data/questions.js";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  constructor() { }

  questions = questions;

  ngOnInit(): void {
    
  }

}
