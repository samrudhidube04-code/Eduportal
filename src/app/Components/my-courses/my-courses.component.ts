import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  myCourses: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

    if (!user.email) {
      alert("Please log in first.");
      return;
    }

    // ✅ Fetch latest user from backend (not localStorage)
    this.http.get<any[]>(`http://localhost:3000/users?email=${user.email}`).subscribe(users => {
      if (users.length > 0) {
        this.myCourses = users[0].myCourses || [];
        console.log('Fetched myCourses from API:', this.myCourses);
      } else {
        alert("User not found.");
      }
    });
  }

  deleteCourse(courseId: number): void {
    if (confirm('Are you sure you want to delete this course?')) {
      const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
      let allEnrollments = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');

      // ✅ Find the index of the exact course (matching both courseId and user email)
      const indexToDelete = allEnrollments.findIndex(
        (course: any) => course.courseId === courseId && course.userEmail === user.email
      );

      if (indexToDelete !== -1) {
        // ✅ Remove only that specific enrollment
        allEnrollments.splice(indexToDelete, 1);

        // ✅ Update localStorage
        localStorage.setItem('enrolledCourses', JSON.stringify(allEnrollments));

        // ✅ Update the UI list for the current user
        this.myCourses = allEnrollments.filter(
          (course: any) => course.userEmail === user.email
        );
      }
    }
  }

}

