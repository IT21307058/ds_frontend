import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamleadComponent } from './teamlead.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PosttaskComponent } from './components/posttask/posttask.component';

const routes: Routes = [
  { path: '', component: TeamleadComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'addTask', component: PosttaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamleadRoutingModule { }
