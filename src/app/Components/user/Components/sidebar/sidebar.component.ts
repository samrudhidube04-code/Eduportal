import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private route: Router) { }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.route.navigate(['/login']);
  }
}
