import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCoursesComponent } from './componets/manage-courses/manage-courses.component';
import { FormsModule } from '@angular/forms';
import { EduportalAdminComponent } from './componets/eduportal-admin/eduportal-admin.component';
import { ManageUsersComponent } from './componets/manage-users/manage-users.component';
import { ReportsComponent } from './componets/reports/reports.component';
import { ProfileComponent } from './componets/profile/profile.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ManageCoursesComponent,
    EduportalAdminComponent,
    ManageUsersComponent,
    ReportsComponent,
    ProfileComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
