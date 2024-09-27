import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UnauthroizedComponent } from './unauthroized/unauthroized.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "unauthroized", component: UnauthroizedComponent },
  { path: 'member', loadChildren: () => import('./member/member.module').then(m => m.MemberModule) },
  { path: 'teamlead', loadChildren: () => import('./teamlead/teamlead.module').then(m => m.TeamleadModule) },
  { path: 'instructor', loadChildren: () => import('./instructor/instructor.module').then(m => m.InstructorModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'learner', loadChildren: () => import('./learner/learner.module').then(m => m.LearnerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
