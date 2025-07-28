import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private route: Router) { }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.route.navigate(['/login']);
  }
}
