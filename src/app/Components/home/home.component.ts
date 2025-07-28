import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  courses: any[] = [];
  selectedCourse: any = null;
  showForm = false;
  enrollData = { name: '', email: '' };
  loading = true;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // Load from localStorage if exists
    const savedCourses = localStorage.getItem('courses');
    if (savedCourses) {
      try {
        const allCourses = JSON.parse(savedCourses);
        this.courses = Array.isArray(allCourses) ? allCourses.slice(0, 3) : [];
      } catch (e) {
        console.error('Invalid course data in localStorage:', e);
        this.courses = [];
      }
    }
  }


  // ngOnInit(): void {
  //   const storedCourses = localStorage.getItem('courses');
  //   if (storedCourses) {
  //     this.courses = JSON.parse(storedCourses);
  //   }

  //   this.http.get<any[]>('http://localhost:3001/Courses').subscribe(data => {
  //     this.courses = data;
  //     this.loading = false;
  //   });
  // }

  handleEnrollClick(course: any) {
    const user = localStorage.getItem('loggedInUser');

    if (!user) {
      alert('⚠️ Please login first to enroll.');
      this.router.navigate(['/login']); // Replace with your actual login route
      return;
    }

    const userData = JSON.parse(user);
    this.enrollData.name = userData.name;
    this.enrollData.email = userData.email;
    this.selectedCourse = course;
    this.showForm = true;
  }

  submitForm() {
    const enrollment = {
      name: this.selectedCourse.name,
      description: this.selectedCourse.description,
      price: this.selectedCourse.price,
      userName: this.enrollData.name,
      userEmail: this.enrollData.email,
      status: 'Active',
      progress: 0
    };

    const enrolled = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
    enrolled.push(enrollment);
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolled));

    alert(`✅ Enrolled in ${this.selectedCourse.name}`);
    this.showForm = false;
  }
}