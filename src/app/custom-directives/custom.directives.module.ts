import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { ButtonCssDirective } from "./button-css.directive";
import { NgToasterComponent } from "./ng-toaster/ng-toaster.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";

@NgModule({
    declarations: [ButtonCssDirective, NgToasterComponent, ConfirmationDialogComponent],
    providers: [],
    imports: [MaterialModule, FormsModule, ReactiveFormsModule],
    exports: [ButtonCssDirective, NgToasterComponent, MaterialModule, ConfirmationDialogComponent],
    entryComponents: [ConfirmationDialogComponent]
})
export class CustomDirectiveModule {

    static forRoot() {
        return {
            ngModule: CustomDirectiveModule,
            providers: []
        }
    }
}