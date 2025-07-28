import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  admin = {
    name: 'Sam Dube',
    email: 'admin@dashboard.com',
    phone: '+91 9876543210',
    location: 'Mumbai, India',
    joined: new Date('2023-02-15'),
    role: 'Super Admin',
  };

  adminStats = {
    users: 120,
    reports: 45,
    accessLevel: 'Full Access',
  };

  editMode = false;

  saveProfile() {
    console.log('Profile updated:', this.admin);
    this.editMode = false;
  }
}