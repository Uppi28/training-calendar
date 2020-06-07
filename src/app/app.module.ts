import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    DataVerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(injector: Injector) {
  setAppInjector(injector);
}
}
