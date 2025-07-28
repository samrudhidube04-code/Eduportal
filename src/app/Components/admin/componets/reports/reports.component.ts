import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  users: any[] = [];
  filteredUsers: any[] = [];

  // Filters
  searchTerm: string = '';
  roleFilter: string = '';
  statusFilter: string = '';


  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/users').subscribe(data => {
      this.users = data;
      this.filteredUsers = [...this.users];
    });
  }

  applyFilter() {
    this.filteredUsers = this.users.filter(user => {
      const matchesName = this.searchTerm
        ? user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;

      const matchesRole = this.roleFilter
        ? user.role === this.roleFilter
        : true;

      const matchesStatus = this.statusFilter
        ? user.status === this.statusFilter
        : true;

      return matchesName && matchesRole && matchesStatus;
    });
  }
}