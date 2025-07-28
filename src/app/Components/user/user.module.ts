import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { MycourseComponent } from './Components/mycourse/mycourse.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalenderComponent } from './Components/calender/calender.component';
import { ProfileComponent } from './Components/profile/profile.component';


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    SidebarComponent,
    MycourseComponent,
    FeedbackComponent,
    CalenderComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ]
})
export class UserModule { }
