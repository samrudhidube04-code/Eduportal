import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {

  timeSlots = ['9AM - 10AM', '10AM - 11AM', '11AM - 12PM', '12PM - 1PM'];

  timetable = [
    {
      day: 'Monday',
      slots: ['Math', 'Angular', 'DSA', 'English']
    },
    {
      day: 'Tuesday',
      slots: ['Java', 'Web Tech', 'Break', 'DBMS']
    },
    {
      day: 'Wednesday',
      slots: ['Python', 'Project', 'Cloud', 'Break']
    },
    {
      day: 'Thursday',
      slots: ['CyberSec', 'ML', 'Sports', 'Angular']
    },
    {
      day: 'Friday',
      slots: ['Revision', 'Mock Test', 'Feedback', 'Open Lab']
    }
  ];
}
