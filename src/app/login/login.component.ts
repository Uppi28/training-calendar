import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { NgToasterComponent } from '../custom-directives/ng-toaster/ng-toaster.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName:string = "";
  password:string = "";

  constructor(public globalService: GlobalService,
    public ngToaster: NgToasterComponent,
    private route: Router) { }

  ngOnInit(): void {
    // Utils.showSpinner();
  }


  ngAfterViewInit() {
    const inputs = document.querySelectorAll(".input");
    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach(input => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });

  }

  loginApp(){
    this.globalService.getUserDetailsHttp().subscribe(res=>{
      if(!(this.userName && this.password)){
        this.globalService.setSelectedUserData(res[0]);
        this.route.navigate(['dashboard']);
      }
      else if(this.validateUserData(res)){
        this.globalService.setSelectedUserData(this.getUserData(res));
        this.route.navigate(['dashboard']);
      }
      else{
        this.ngToaster.error("User details invalid")
        return false
      }
    })
  }

  validateUserData(arr){
    if(this.userName)
    return arr.some(user=>{
      if(user.user_name === this.userName && user.user_name === this.password)
        return true
      else
        return false
    })
  }

  getUserData(arr){
    return arr.find(user=> user.user_name === this.userName)
  }

}

