import { AppInjector } from "./app-injector";
import { NgLoaderService } from './custom-directives/ng-loader/ng-loader.service';

export default class Utils {
  private static spinner;

  /*****  NgxSpinnerService Part *****/
  static createSpinnerInstance() {
    this.spinner = AppInjector.get(NgLoaderService);
  }

  static showSpinner() {
    if (!this.spinner) Utils.createSpinnerInstance();
    this.spinner.show();
  }

  static hideSpinner() {
    if(this.spinner){
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }
}
}