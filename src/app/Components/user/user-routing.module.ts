import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { MyCoursesComponent } from '../my-courses/my-courses.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { CalenderComponent } from './Components/calender/calender.component';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [{ path: '', component: UserComponent, },
{ path: "dashboard", component: DashboardComponent },
{ path: "mycourse", component: MyCoursesComponent },


{ path: "feedback", component: FeedbackComponent },
{ path: "calender", component: CalenderComponent },
{ path: "profile", component: ProfileComponent },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
