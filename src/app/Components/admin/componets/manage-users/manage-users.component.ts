import { Component, OnInit } from '@angular/core';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  users: any[] = [];
  selectedUser: any = null;

  constructor(private userService: FormServiceService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: () => {
        alert('Failed to load users.');
      }
    });
  }

  editUser(user: any): void {
    this.selectedUser = { ...user }; // Clone to avoid two-way binding directly to original
  }

  cancelEdit(): void {
    this.selectedUser = null;
  }

  saveUser(): void {
    if (this.selectedUser && this.selectedUser.id) {
      this.userService.updateUser(this.selectedUser.id, this.selectedUser).subscribe({
        next: () => {
          this.loadUsers(); // Refresh list
          this.selectedUser = null;
        },
        error: () => {
          alert('Failed to save user.');
        }
      });
    }
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.loadUsers();
        },
        error: () => {
          alert('Failed to delete user.');
        }
      });
    }
  }
}
