import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-my-trainings',
  templateUrl: './my-trainings.component.html',
  styleUrls: ['./my-trainings.component.scss']
})
export class MyTrainingsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private globalService : GlobalService,
    private router: Router) { }

  sub: any;
  id: number = null;
  training_list = [];

  selectedtraining:any = {};

  ngOnInit(): void {

    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.id = +params['id'] || 1;
      });
      this.getTrainingData();
  }

  getTrainingData(){
    this.globalService.getTrainingListHttp().subscribe((res:any)=>{
      this.training_list = res;
      this.selectedtraining = this.training_list.find(ele=> ele.id === this.id);
    })
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
