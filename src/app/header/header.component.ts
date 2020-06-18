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
  public hideUserselectToggle = false

  ngOnInit(): void {
    let user = this.globalService.getSelectedUserData();
    console.log(user);
    console.log(this.router.url);
    this.hideUserSelect()
  }

  public userList = [{name:"Manager",value:"manager"},{name:"Trainer",value:"trainer"},{name:"Trainee",value:"trainee"}];
  public selectedValue = '';

  setUser(event){
    console.log("event",event);
    this.toggleUser.emit(event);
    this.router.navigate(['dashboard/home']);
    this.hideUserSelect()
  }  


  hideUserSelect(){
    if(this.router.url == '/'){
      this.hideUserselectToggle = false;
    }else{
      this.hideUserselectToggle = true
    }
  }

}
