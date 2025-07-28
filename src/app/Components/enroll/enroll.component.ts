// import { Component, Input, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-enroll-course',
//   templateUrl: './enroll-course.component.html',
//   styleUrls: ['./enroll-course.component.css']
// })
// export class EnrollCourseComponent implements OnInit {
//   @Input() course: any;
//   loggedInUser: any = null;
//   showForm: boolean = false;

//   enrollmentData = {
//     name: '',
//     email: '',
//     courseName: '',
//     price: 0
//   };

//   constructor(private router: Router, private http: HttpClient) { }

//   ngOnInit(): void {
//     const userData = localStorage.getItem('loggedInUser');
//     if (userData) {
//       this.loggedInUser = JSON.parse(userData);
//     }

//     if (this.course) {
//       this.enrollmentData.courseName = this.course.name;
//       this.enrollmentData.price = this.course.price;
//     }
//   }

//   openEnrollmentForm() {
//     if (!this.loggedInUser) {
//       alert('⚠️ You must be logged in to enroll.');
//       this.router.navigate(['/login']);
//       return;
//     }

//     this.enrollmentData.name = this.loggedInUser.name;
//     this.enrollmentData.email = this.loggedInUser.email;
//     this.showForm = true;
//   }

//   confirmEnrollment() {
//     if (!this.loggedInUser) {
//       alert('User not found.');
//       return;
//     }

//     const userEmail = this.loggedInUser.email;

//     this.http.get<any[]>(`http://localhost:3000/users?email=${userEmail}`).subscribe(users => {
//       if (users.length === 0) {
//         alert('User not found in database.');
//         return;
//       }

//       const user = users[0];

//       const updatedCourses = user.myCourses ? [...user.myCourses, this.course] : [this.course];

//       this.http.patch(`http://localhost:3000/users/${user.id}`, {
//         myCourses: updatedCourses
//       }).subscribe(() => {
//         alert('✅ Course enrolled successfully!');
//         this.showForm = false;
//       });
//     });
//   }
// }
