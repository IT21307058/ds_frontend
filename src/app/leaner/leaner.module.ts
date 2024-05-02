import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeanerRoutingModule } from './leaner-routing.module';
import { LeanerComponent } from './leaner.component';
import { AllCourseComponent } from './components/all-course/all-course.component';
import { DemoAngularMaterailModule } from '../DemoAngularMaterialModule';
import { AllContentComponent } from './components/all-content/all-content.component';
import { MarkCompleteComponent } from './components/mark-complete/mark-complete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { RegisterLeanerComponent } from './components/register-leaner/register-leaner.component';


@NgModule({
  declarations: [
    LeanerComponent,
    AllCourseComponent,
    AllContentComponent,
    MarkCompleteComponent,
    RegisterLeanerComponent
  ],
  imports: [
    CommonModule,
    LeanerRoutingModule,
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
export class LeanerModule { }
