import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent {

  forgotForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.forgotForm.valid) {
      const email = this.forgotForm.value.email;
      console.log('Reset link sent to:', email);
      alert('Password reset link has been sent to your email!');
      this.forgotForm.reset();
      this.submitted = false;
    }
  }
}
