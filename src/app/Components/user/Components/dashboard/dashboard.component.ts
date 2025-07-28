import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any = {};
  myCourses: any[] = [];
  activeCourses: number = 0;
  averageProgress: number = 0;

  constructor(private http: HttpClient, private http1: Router) { }

  ngOnInit(): void {
    const localUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.user = localUser;

    this.http.get<any[]>(`http://localhost:3000/users?email=${this.user.email}`).subscribe(users => {
      if (users.length > 0) {
        this.myCourses = users[0].myCourses || [];
        this.activeCourses = this.myCourses.filter(c => c.status === 'Active').length;
        this.averageProgress = this.calculateAverageProgress();
      }
    });
  }

  calculateAverageProgress(): number {
    if (this.myCourses.length === 0) return 0;
    const total = this.myCourses.reduce((sum, c) => sum + (c.progress || 0), 0);
    return Math.round(total / this.myCourses.length);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    this.http1.navigate(['/login']);
  }
}