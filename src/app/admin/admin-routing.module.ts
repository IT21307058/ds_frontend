import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AllContentComponent } from './components/all-content/all-content.component';
import { UpdatestatusComponent } from './components/updatestatus/updatestatus.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'allContent', component: AllContentComponent },
  { path: 'updatestatuscontent/:id', component: UpdatestatusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
