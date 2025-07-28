// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { FormServiceService } from 'src/app/service/form-service.service';
// import { User } from '../Interface/interface';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

//   loginForm: FormGroup;
//   submitted = false;
//   loginError = '';

//   constructor(private fb: FormBuilder, private router: Router, private userserve: FormServiceService, private http: HttpClient) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required],
//     });
//   }
//   onSubmit() {
//     const { email, password } = this.loginForm.value;

//     // 🔐 Check static admin login
//     if (this.userserve.isAdmin(email, password)) {
//       alert('Welcome Admin!');
//       this.router.navigate(['/admin']);
//       return;
//     }

//     // 👤 Check dynamic users from JSON
//     this.userserve.loginUser(email, password).subscribe(users => {
//       if (users.length > 0) {
//         alert('Welcome User!');
//         this.router.navigate(['/user']);
//       } else {
//         alert('Invalid credentials');
//       }
//     });
//   }
// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;           // ✅ Now exists
  loginError = '';             // ✅ Now exists

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: FormServiceService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    if (this.userService.isAdmin(email, password)) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/admin']);
      return;
    }

    this.userService.loginUser(email, password).subscribe(users => {
      if (users.length > 0) {
        const user = users[0];
        const loginUser = {
          name: user.name,
          email: user.email,
          role: user.role || 'user',
          loginTime: new Date()
        };

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('role', loginUser.role);
        localStorage.setItem('loggedInUser', JSON.stringify(loginUser));

        this.router.navigate(['/user']);
      } else {
        this.loginError = 'Invalid email or password';
      }
    });
  }
}