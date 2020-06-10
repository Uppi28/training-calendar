import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-my-trainings-list',
  templateUrl: './my-trainings-list.component.html',
  styleUrls: ['./my-trainings-list.component.scss']
})
export class MyTrainingsListComponent implements OnInit {


  public training_list = [];
  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.getTrainingListHttp().subscribe((res:any)=>{
      this.training_list = res;
      console.log(res);
      
    })
  }

}
