import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeanerComponent } from './leaner.component';
import { AllCourseComponent } from './components/all-course/all-course.component';
import { AllContentComponent } from './components/all-content/all-content.component';
import { MarkCompleteComponent } from './components/mark-complete/mark-complete.component';

const routes: Routes = [
  { path: '', component: LeanerComponent },
  { path: 'allCourse', component: AllCourseComponent},
  { path: 'courses/:id', component: AllContentComponent},
  { path: 'markContent/:courseId/:contentId', component: MarkCompleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeanerRoutingModule { }
