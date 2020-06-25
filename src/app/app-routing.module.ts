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
// import { TrainerViewComponent } from './trainer-view/trainer-view.component';
// import { TraineeDetailsComponent } from './trainee-details/trainee-details.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TraineesComponent } from './trainees/trainees.component';
import { TrainingAnalyticsComponent } from './training-analytics/training-analytics.component';
import { ReconciliationTrackerComponent } from './reconciliation-tracker/reconciliation-tracker.component';
import { ReconciliationOverdueComponent } from './reconciliation-overdue/reconciliation-overdue.component';
import { ReconciliationReminder2Component } from './reconciliation-reminder2/reconciliation-reminder2.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'home', component: MyHomeComponent },
      { path: 'trainings', component: MyTrainingsListComponent },
      { path: 'team', component: MyTeamComponent },
      { path: 'training', component: MyTrainingsComponent },
      { path: 'questionnaire', component: QuestionnaireComponent },
      { path: 'trainer', component: TrainerComponent },
      { path: 'trainees', component: TraineesComponent },
      { path: 'training-analytics', component: TrainingAnalyticsComponent},
      { path: 'reconciliation-tracker', component: ReconciliationTrackerComponent },
      { path: 'reconciliation-overdue', component: ReconciliationOverdueComponent },
      { path: 'reconciliation-remainder', component: ReconciliationReminder2Component },
      { path: '', component: MainComponent },
      // { path: 'trainer-view', component: TrainerViewComponent },
      // { path: 'trainee-details-view', component: TraineeDetailsComponent },
    ]
  }, 
  
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
