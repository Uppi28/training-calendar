import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { NgToasterComponent } from 'src/app/custom-directives/ng-toaster/ng-toaster.component';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private userLoggedIn:any = {};

  constructor(public ngToaster: NgToasterComponent,
    private httpClient: HttpClient) {
  }

  setSelectedUserData(user){
    this.userLoggedIn = user;
  }

  getSelectedUserData(){
    return this.userLoggedIn
  }



  // ----------------- http requests -------------------

  getUserDetailsHttp(){
    return this.httpClient.get("/assets/data/user_details.json");
  }

  public handleError(error: any): any {
    let errObj: any = {
      status: error.status,
      message: typeof error.error == "object" ? JSON.stringify(error.error) : error.error
    };
    this.ngToaster.error(errObj.message)
    throw errObj;
  }
}
