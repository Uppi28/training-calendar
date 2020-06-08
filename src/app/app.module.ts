import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomDirectiveModule } from "./custom-directives/custom.directives.module";
import { setAppInjector } from './app-injector';

import { DataVerifyComponent } from './data-verify/data-verify.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionnaireComponent } from "./questionnaire/questionnaire.component";
import { HttpClientModule } from '@angular/common/http';
import { MyHomeComponent } from './my-home/my-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardUserMenuComponent } from './sub-components/dashboard-user-menu/dashboard-user-menu.component';
import { MyTrainingPanelComponent } from './sub-components/my-training-panel/my-training-panel.component';
import { OverduePanelComponent } from './sub-components/overdue-panel/overdue-panel.component';
import { JourneyPanelComponent } from './sub-components/journey-panel/journey-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    DataVerifyComponent,
    DashboardComponent,
    MyHomeComponent,
    UserProfileComponent,
    DashboardUserMenuComponent,
    MyTrainingPanelComponent,
    OverduePanelComponent,
    QuestionnaireComponent,
    JourneyPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomDirectiveModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(injector: Injector) {
  setAppInjector(injector);
}
}
