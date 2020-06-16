import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { GlobalService } from "../../global.service";

@Component({
  selector: 'app-journey-panel',
  templateUrl: './journey-panel.component.html',
  styleUrls: ['./journey-panel.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class JourneyPanelComponent implements OnInit {
  todayDate :Date = null;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  trainersStatus = [];

  constructor(private _formBuilder: FormBuilder,
    public globalService: GlobalService ) {}

  ngOnInit() {
    this.todayDate = new Date();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.globalService.getTrainersStatusHttp().subscribe((res:any)=>{
      this.trainersStatus = res;
    })

  }

}

