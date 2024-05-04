import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnerComponent } from './learner.component';
import { LearnerDetailComponent } from './components/learner-detail/learner-detail.component';
import { RegisterLearnerComponent } from './components/register-learner/register-learner.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { AllContentComponent } from './components/all-content/all-content.component';
import { EnrollCourseComponent } from './components/enroll-course/enroll-course.component';
import { InProgressCoursesComponent } from './components/in-progress-courses/in-progress-courses.component';
import { CancelEnrollmentComponent } from './components/cancel-enrollment/cancel-enrollment.component';
import { CompleteCourseComponent } from './components/complete-course/complete-course.component';

const routes: Routes = [
  { path: '', component: LearnerComponent },
  { path: 'learnerDetail', component: LearnerDetailComponent },
  { path: 'registerleaner', component: RegisterLearnerComponent},
  { path: 'allcourses', component: AllCoursesComponent},
  { path: 'allcontent/:id', component: AllContentComponent},
  { path: 'enroll-course', component: EnrollCourseComponent},
  { path: 'in-progress-courses', component: InProgressCoursesComponent},
  { path: 'cancel-enrollment', component: CancelEnrollmentComponent},
  { path: 'complete-course', component: CompleteCourseComponent},
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
