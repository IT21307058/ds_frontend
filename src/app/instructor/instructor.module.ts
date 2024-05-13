import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { InstructorComponent } from './instructor.component';
import { PostCourseComponent } from './components/post-course/post-course.component';
import { PostContentComponent } from './components/post-content/post-content.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoAngularMaterailModule } from '../DemoAngularMaterialModule';
import { AllCourseComponent } from './components/all-course/all-course.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AllContentComponent } from './components/all-content/all-content.component';
import { MatButtonModule } from '@angular/material/button';
import { UpdateContentComponent } from './components/update-content/update-content.component';
import { LeanerProgressComponent } from './components/leaner-progress/leaner-progress.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';



@NgModule({
  declarations: [
    InstructorComponent,
    PostCourseComponent,
    PostContentComponent,
    AllCourseComponent,
    AllContentComponent,
    UpdateContentComponent,
    LeanerProgressComponent,
    UpdateCourseComponent
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DemoAngularMaterailModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule
  ]
})
export class InstructorModule { }
