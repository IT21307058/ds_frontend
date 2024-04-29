import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnerRoutingModule } from './learner-routing.module';
import { LearnerComponent } from './learner.component';


@NgModule({
  declarations: [
    LearnerComponent
  ],
  imports: [
    CommonModule,
    LearnerRoutingModule
  ]
})
export class LearnerModule { }
