import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/* add components here */
import {AboutComponent}from './about/about.component';
import{ContactusComponent} from './contactus/contactus.component';
import {HomeComponent}from './home/home.component';
import {LogincreatorComponent}from './logincreator/logincreator.component';
import {LoginuniversityComponent}from './loginuniversity/loginuniversity.component';
import {LoginstudentComponent}from './loginstudent/loginstudent.component';
import {TeamComponent}from './team/team.component';
import {CreatordashComponent}from './creatordash/creatordash.component';
import {EnrollstuentComponent}from './enrollstuent/enrollstuent.component';
import {CheckenrolledstudentComponent}from './checkenrolledstudent/checkenrolledstudent.component';
import {CreateCertificateComponent} from './create-certificate/create-certificate.component';
import {ViewCertificateComponent}from './view-certificate/view-certificate.component';
import {UniversityTransactionComponent} from './university-transaction/university-transaction.component';
import {ViewStudentProfileComponent} from './view-student-profile/view-student-profile.component';
/*added*/
import { Routes, RouterModule } from '@angular/router';
import { Certificate } from 'crypto';

/*add lnks ie html id of components */

const routes: Routes = [

  {
    path:'about',component:AboutComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'logincreator',component:LogincreatorComponent
  },
  {
    path:'loginuniversity',component:LoginuniversityComponent
  },
  {
    path:'loginstudent',component:LoginstudentComponent
  },
  {
    path:'team',component:TeamComponent
  },
  {
    path:'clogin',component:CreatordashComponent
  },
  {
    path:'Enroll-Student',component:EnrollstuentComponent
  },
  {
    path:'enrolled',component:CheckenrolledstudentComponent
  },
  {
    path:'create-certificate',component:CreateCertificateComponent
  },
  {
    path:'view-certificate',component:ViewCertificateComponent
  },
  {
    path:'university-transaction',component:UniversityTransactionComponent
  },
  {
    path:'view-certificate',component:ViewCertificateComponent
  },
  {
    path:'profile',component:ViewStudentProfileComponent
  }





]


@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
