import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { DataVerifyComponent } from './data-verify/data-verify.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { MyTrainingsComponent } from './my-trainings/my-trainings.component';
import { MyTrainingsListComponent } from './my-trainings-list/my-trainings-list.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { ManagerComponent } from './manager/manager.component';
import { TrainerViewComponent } from './trainer-view/trainer-view.component';
import { TraineeDetailsComponent } from './trainee-details/trainee-details.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'main', component: MainComponent },
  { 
    path: 'manager', component: ManagerComponent ,
    children: [
      { path: 'home', component: MyHomeComponent },
      { path: 'trainings', component: MyTrainingsListComponent },
      { path: 'team', component: MyTeamComponent },
      { path: 'training', component: MyTrainingsComponent },
      { path: 'questionnaire', component: QuestionnaireComponent },
      { path: 'trainer-view', component: TrainerViewComponent },
      { path: 'trainee-details-view', component: TraineeDetailsComponent },
      { path: '', component: MyHomeComponent },
      
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'home', component: MyHomeComponent },
      { path: 'trainings', component: MyTrainingsListComponent },
      { path: 'team', component: MyTeamComponent },
      { path: 'training', component: MyTrainingsComponent },
      { path: 'questionnaire', component: QuestionnaireComponent },
      { path: 'trainer-view', component: TrainerViewComponent },
      { path: 'trainee-details-view', component: TraineeDetailsComponent },
    ]
  },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
