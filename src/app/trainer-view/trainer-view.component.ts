import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-trainer-view',
  templateUrl: './trainer-view.component.html',
  styleUrls: ['./trainer-view.component.scss']
})
export class TrainerViewComponent implements OnInit {

  public training_list = [];
  constructor(public globalService: GlobalService) { }
  
  ngOnInit(): void {
    this.globalService.getTrainingListHttp().subscribe((res:any)=>{
      this.training_list = res;
      console.log(res);
      
    })
  }

  

}
