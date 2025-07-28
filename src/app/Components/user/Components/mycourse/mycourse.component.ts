import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.css']
})
export class MycourseComponent {
  myCourses: any[] = [];
  user: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

    if (this.user && this.user.id) {
      this.http.get<any>(`http://localhost:3000/users/${this.user.id}`).subscribe({
        next: (userData) => {
          this.myCourses = userData.myCourses || [];
        },
        error: (err) => {
          console.error('Failed to load courses', err);
          alert('Could not fetch your courses.');
        }
      });
    } else {
      alert("Please log in to view your courses.");
    }
  }

  deleteCourse(index: number): void {
    console.log('Delete clicked on index:', index); // ✅ Step 1: Confirm button is working

    // Remove from local
    this.myCourses.splice(index, 1);

    // Update to JSON server
    this.http.patch(`http://localhost:3000/users/${this.user.id}`, {
      myCourses: this.myCourses
    }).subscribe({
      next: () => {
        console.log('Successfully deleted course from server'); // ✅ Step 2
        alert('Course deleted successfully.');
      },
      error: (err) => {
        console.error('Failed to delete course:', err); // ✅ Step 3
        alert('Error deleting course.');
      }
    });
  }

}
