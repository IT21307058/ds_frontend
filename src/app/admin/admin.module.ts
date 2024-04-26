import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AllContentComponent } from './components/all-content/all-content.component';
import { DemoAngularMaterailModule } from '../DemoAngularMaterialModule';
import { UpdatestatusComponent } from './components/updatestatus/updatestatus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    AllContentComponent,
    UpdatestatusComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoAngularMaterailModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
