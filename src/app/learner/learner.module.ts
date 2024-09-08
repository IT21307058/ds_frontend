import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LearnerRoutingModule } from './learner-routing.module';
import { LearnerComponent } from './learner.component';

import { EnrollCourseComponent } from './components/enroll-course/enroll-course.component';
import { CancelEnrollmentComponent } from './components/cancel-enrollment/cancel-enrollment.component';
import { CourseCountComponent } from './components/course-count/course-count.component';
import { UpdateProgressComponent } from './components/update-progress/update-progress.component';
import { RegisterLearnerComponent } from './components/register-learner/register-learner.component';
import { DemoAngularMaterailModule } from '../DemoAngularMaterialModule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { AllContentComponent } from './components/all-content/all-content.component';
import { InProgressCoursesComponent } from './components/in-progress-courses/in-progress-courses.component';
import { CompleteCourseComponent } from './components/complete-course/complete-course.component';
import { MarkCompleteComponent } from './components/mark-complete/mark-complete.component';



@NgModule({
  declarations: [
    LearnerComponent,
  
    EnrollCourseComponent,
    CancelEnrollmentComponent,
    CourseCountComponent,
    UpdateProgressComponent,
    RegisterLearnerComponent,
    AllCoursesComponent,
    AllContentComponent,
    InProgressCoursesComponent,
    CompleteCourseComponent,
    MarkCompleteComponent
  ],
  imports: [
    CommonModule,
    LearnerRoutingModule,
    DemoAngularMaterailModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule
  ]
})
export class LearnerModule { }
