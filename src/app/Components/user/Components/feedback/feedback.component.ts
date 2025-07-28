import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  feedback = {
    name: '',
    email: '',
    message: '',
    rating: ''
  };
  constructor(private http: HttpClient) { }

  submitFeedback() {
    this.http.post('http://localhost:3000/users', this.feedback).subscribe({
      next: () => {
        alert('Feedback submitted successfully!');
        this.feedback = { name: '', email: '', message: '', rating: '' };
      },
      error: (err) => {
        alert('Error submitting feedback.');
        console.error(err);
      }
    });
  }
}