import { Component, OnInit } from '@angular/core';
import { questions } from "../../assets/data/questions.js";
import { GlobalService } from '../global.service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  constructor(public globalService : GlobalService,public router: Router) { }

  questions = questions;

  ngOnInit(): void {
    
  }

  setDisableButton(){
    this.globalService.setDisableButton(false);
    console.log("bb",this.globalService.getButtonStatus())
    this.router.navigate(["dashboard/home"])
  }

}
