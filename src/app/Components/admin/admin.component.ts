import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  // constructor(private router: Router, private userserv: FormServiceService, private http: HttpClient) { }

  // users: any[] = [];
  // today: Date = new Date();
  // ngOnInit(): void {
  //   this.loadLoggedUsers();
  //   this.http.get<any[]>('http://localhost:3000/users').subscribe((res) => {
  //     this.users = res.map(user => ({
  //       ...user,
  //       loginTime: user.loginTime ? new Date(user.loginTime) : null
  //     }));
  //   })

  // }

  // logout() {
  //   localStorage.removeItem('isLoggedIn');
  //   this.router.navigate(['/login']);
  // }

  // loadLoggedUsers() {
  //   this.userserv.getLoggedUsers().subscribe({
  //     next: (data) => this.users = data,

  //     error: (err) => console.error('Error fetching users', err)
  //   });
  // }
  // isCollapsed = false;

  // cards = [
  //   { title: 'Total Courses', value: 38, icon: 'bi bi-book-fill', bgClass: 'bg-primary' },
  //   { title: 'Total Students', value: 512, icon: 'bi bi-people-fill', bgClass: 'bg-success' },
  //   { title: 'Mentors', value: 14, icon: 'bi bi-person-video3', bgClass: 'bg-warning text-dark' },
  //   { title: 'Reports', value: 8, icon: 'bi bi-bar-chart-fill', bgClass: 'bg-danger' }
  // ];

  // toggleSidebar() {
  //   this.isCollapsed = !this.isCollapsed;
  // }



}

