import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any[] = [];
  isCollapsed = false;
  today: Date = new Date();

  totalCourses = 0;
  activeCourses = 0;
  pendingApprovals = 0;
  categories = 0;
  enrollments = 0;
  courseReviews = 0;

  courseTypes: { name: string; count: number }[] = [];

  constructor(
    private router: Router,
    private userserv: FormServiceService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.loadCourses(); // 🔁 Load from localStorage
    this.loadUsersAndEnrollments(); // 🔁 From JSON server
    this.loadReviews(); // 🔁 From JSON server
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  scrollTo(id: string): void {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  loadCourses() {
    const localCourses = localStorage.getItem('courses');
    const courses = localCourses ? JSON.parse(localCourses) : [];

    if (!Array.isArray(courses)) {
      console.error('❌ courses is not an array:', courses);
      return;
    }

    this.totalCourses = courses.length;
    this.activeCourses = courses.filter(c => c.status?.toLowerCase() === 'active').length;
    this.pendingApprovals = courses.filter(c => c.status?.toLowerCase() === 'pending').length;

    const typeMap: { [key: string]: number } = {};
    courses.forEach(course => {
      const category = course.category || 'Uncategorized';
      typeMap[category] = (typeMap[category] || 0) + 1;
    });

    this.courseTypes = Object.entries(typeMap).map(([name, count]) => ({ name, count }));
    this.categories = this.courseTypes.length;
  }

  loadUsersAndEnrollments() {
    this.http.get<any[]>('http://localhost:3000/users').subscribe(res => {
      this.users = res.map(user => ({
        ...user,
        loginTime: user.loginTime ? new Date(user.loginTime) : null
      }));

      this.calculateEnrollments(res);
    });
  }

  calculateEnrollments(users: any[]) {
    let allEnrollments: any[] = [];
    users.forEach(user => {
      const myCourses = user.myCourses || [];
      allEnrollments = allEnrollments.concat(myCourses);
    });
    this.enrollments = allEnrollments.length;
  }

  loadReviews() {
    this.http.get<any[]>('http://localhost:3000/reviews').subscribe(
      reviews => this.courseReviews = reviews.length,
      () => this.courseReviews = 0
    );
  }
}
