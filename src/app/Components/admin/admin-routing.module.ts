import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCoursesComponent } from './componets/manage-courses/manage-courses.component';
import { ManageUsersComponent } from './componets/manage-users/manage-users.component';
import { ReportsComponent } from './componets/reports/reports.component';
import { ProfileComponent } from './componets/profile/profile.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{ path: 'admin/dashboard', component: DashboardComponent },
{ path: "managecourses", component: ManageCoursesComponent },
{ path: "manageusers", component: ManageUsersComponent },
{ path: "reports", component: ReportsComponent },
{ path: "profile", component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
