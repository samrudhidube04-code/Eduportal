import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


  isEditing = false;

  user = {
    name: 'Sam Dube',
    email: 'sam@example.com',
    role: 'Student',
    phone: '9876543210',
    image: 'assets/user.png'
  };

  saveProfile() {
    this.isEditing = false;
    alert('Profile updated successfully!');
    // Optionally save to backend here
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
