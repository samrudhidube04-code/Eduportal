import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.css']
})
export class ExploreCoursesComponent implements OnInit {
  courses: any[] = [];
  enrollForm!: FormGroup;
  selectedCourse: any = null;
  showModal = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const storedCourses = localStorage.getItem('courses');
    this.courses = storedCourses ? JSON.parse(storedCourses) : [];

    this.enrollForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      courseName: [''],
      price: ['']
    });
  }

  openEnroll(course: any) {
    this.selectedCourse = course;
    this.enrollForm.patchValue({
      courseName: course.name,
      price: course.price
    });
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  confirmEnrollment() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const role = localStorage.getItem('role');

    if (!isLoggedIn || role !== 'user') {
      alert('Please log in as a user to enroll.');
      this.router.navigate(['/login']);
      return;
    }

    const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    const email = user.email;

    // 🔍 Fetch the user from the API
    this.http.get<any[]>(`http://localhost:3000/users?email=${email}`).subscribe(users => {
      if (users.length === 0) {
        alert('User not found.');
        return;
      }

      const userData = users[0];
      const userId = userData.id;
      const currentCourses = userData.myCourses || [];

      // 🚫 Prevent duplicate enrollments
      const alreadyEnrolled = currentCourses.some((c: any) => c.name === this.selectedCourse.name);
      if (alreadyEnrolled) {
        alert('You have already enrolled in this course.');
        this.closeModal();
        this.router.navigate(['/mycourses']);
        return;
      }

      const updatedCourses = [...currentCourses, this.selectedCourse];

      // 🔁 Patch request to update user's myCourses
      this.http.patch(`http://localhost:3000/users/${userId}`, {
        myCourses: updatedCourses
      }).subscribe(() => {
        alert('Successfully enrolled in the course!');
        // this.closeModal();
        this.router.navigate(['']);
      }, error => {
        console.error('Enrollment failed:', error);
        alert('Failed to enroll. Try again.');
      });
    });
  }
}
