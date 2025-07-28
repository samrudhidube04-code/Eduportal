import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  private apiUrl = 'http://localhost:3000/users';

  // ✅ Static Admin Credentials
  private admin = {
    email: 'admin@gmail.com',
    password: 'admin123',
    role: 'admin'
  };

  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
  // ✅ Check if login matches static admin
  isAdmin(email: string, password: string): boolean {
    return email === this.admin.email && password === this.admin.password;
  }

  // ✅ Check if user exists in JSON file
  loginUser(email: string, password: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`);
  }

  getLoggedUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getRegisteredUsers(): any[] {
    const data = localStorage.getItem('registeredUsers');
    return data ? JSON.parse(data) : [];
  }

  // loginUser(email: string, password: string): Observable<any[]> {
  //   return this.http.get<any[]>(`http://localhost:3000/users?email=${email}&password=${password}`);
  // }
  updateLoginTime(userId: number, loginTime: string): Observable<any> {
    return this.http.patch(`http://localhost:3000/users/${userId}`, { loginTime });
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/users');
  }

  updateUser(id: number, updatedUser: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedUser);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}




