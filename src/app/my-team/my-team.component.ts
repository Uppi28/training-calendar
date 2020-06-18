import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss','./my-team.component2.scss']
})
export class MyTeamComponent implements OnInit {

  constructor(public globalService: GlobalService) { }
  public teamMembers = []
  ngOnInit(): void {
    this.getTeamMembers()
  }

  getTeamMembers(){
    this.globalService.getTeamMembers().subscribe((res:any)=>{
      this.teamMembers = res;
      console.log("teamMembers",res);
    })
  }

}
