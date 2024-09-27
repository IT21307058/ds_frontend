import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoAngularMaterailModule } from './DemoAngularMaterialModule';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { EmailToastComponent } from './email-toast/email-toast.component';
import { FooterComponent } from './footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LearnerDetailComponent } from './learner/components/learner-detail/learner-detail.component';
import { PrivateContentComponent } from './private-content/private-content.component';
import { PublicContentComponent } from './public-content/public-content.component';
import { UnauthroizedComponent } from './unauthroized/unauthroized.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmailToastComponent,
    FooterComponent,
    LearnerDetailComponent ,
    PrivateContentComponent,
    PublicContentComponent,
    UnauthroizedComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoAngularMaterailModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
