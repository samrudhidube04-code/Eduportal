import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['role'];  // 👈 from route
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const currentRole = localStorage.getItem('role');  // 'admin' or 'user'

    if (isLoggedIn && currentRole === expectedRole) {
      return true;
    } else {
      alert("Access Denied");
      this.router.navigate(['/login']);
      return false;
    }
  }
}
