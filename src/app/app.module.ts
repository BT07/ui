import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginstudentComponent } from './loginstudent/loginstudent.component';
import { LoginuniversityComponent } from './loginuniversity/loginuniversity.component';
import { LogincreatorComponent } from './logincreator/logincreator.component';
import { AppRoutingModule } from './app-routing.module';
import { CreatordashComponent } from './creatordash/creatordash.component';
import { StudentdashComponent } from './studentdash/studentdash.component';
import { UniversitydashComponent } from './universitydash/universitydash.component';
import { EnrollstuentComponent } from './enrollstuent/enrollstuent.component';
import { CheckenrolledstudentComponent } from './checkenrolledstudent/checkenrolledstudent.component';
import { SidenavstudentComponent } from './sidenavstudent/sidenavstudent.component';
import { SidenavuniversityComponent } from './sidenavuniversity/sidenavuniversity.component';
import { ViewCertificateComponent } from './view-certificate/view-certificate.component';
import { ViewStudentProfileComponent } from './view-student-profile/view-student-profile.component';
import { CreateCertificateComponent } from './create-certificate/create-certificate.component';
import { UniversityTransactionComponent } from './university-transaction/university-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    ContactusComponent,
    NavbarComponent,
    SidenavComponent,
    LoginstudentComponent,
    LoginuniversityComponent,
    LogincreatorComponent,
    CreatordashComponent,
    StudentdashComponent,
    UniversitydashComponent,
    EnrollstuentComponent,
    CheckenrolledstudentComponent,
    SidenavstudentComponent,
    SidenavuniversityComponent,
    ViewCertificateComponent,
    ViewStudentProfileComponent,
    CreateCertificateComponent,
    UniversityTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
