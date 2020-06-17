import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
// import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public globalService: GlobalService,public router : Router) { }

  @Input () login?: string;
  @Output() toggleUser = new EventEmitter<string>();

  ngOnInit(): void {
    let user = this.globalService.getSelectedUserData();
    console.log(user);
  }

  public userList = [{name:"Manager",value:"manager"},{name:"Trainer",value:"trainer"},{name:"Trainee",value:"trainee"}];
  public selectedValue = 'manager';

  setUser(event){
    console.log("event",event.value);
    this.toggleUser.emit(event.value);
    this.router.navigate(['/dashboard/home'])
  }  

}
