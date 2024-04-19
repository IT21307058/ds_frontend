import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorComponent } from './instructor.component';
import { PostCourseComponent } from './components/post-course/post-course.component';
import { PostContentComponent } from './components/post-content/post-content.component';
import { AllCourseComponent } from './components/all-course/all-course.component';
import { AllContentComponent } from './components/all-content/all-content.component';

const routes: Routes = [
  { path: '', component: InstructorComponent },
  { path: 'addCourse', component: PostCourseComponent},
  { path: 'addContent', component: PostContentComponent},
  { path: 'allCourse', component: AllCourseComponent},
  { path: 'courses/:id', component: AllContentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
