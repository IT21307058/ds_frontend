import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnerComponent } from './learner.component';
import { LearnerDetailComponent } from './components/learner-detail/learner-detail.component';
import { RegisterLearnerComponent } from './components/register-learner/register-learner.component';

const routes: Routes = [
  { path: '', component: LearnerComponent },
  { path: 'learnerDetail', component: LearnerDetailComponent },
  { path: 'registerleaner', component: RegisterLearnerComponent},
  // { path: 'addContent', component: PostContentComponent},
  // { path: 'allCourse', component: AllCourseComponent},
  // { path: 'courses/:id', component: AllContentComponent },
  // { path: 'updatecontent/:id', component: UpdateContentComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnerRoutingModule { }
