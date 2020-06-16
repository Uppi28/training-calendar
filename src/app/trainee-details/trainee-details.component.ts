import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-trainee-details',
  templateUrl: './trainee-details.component.html',
  styleUrls: ['./trainee-details.component.scss']
})
export class TraineeDetailsComponent implements OnInit {

  public trainee_list = [];
  constructor(public globalService: GlobalService) { }
  
  ngOnInit(): void {
    this.globalService.getTraineesListHttp().subscribe((res:any)=>{
      this.trainee_list = res;
      console.log(res);
      
    })
  }
}
