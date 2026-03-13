import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm = new FormGroup(
    {
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      contactMethod: new FormControl('Email'),
      phoneNumber: new FormControl(),
    },
    [this.validateMatchingPassword],
  );

  get contactMethod() {
    return this.registerForm.get('contactMethod')?.value;
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.registerForm.reset({ contactMethod: 'Email' });

    const control = this.registerForm.get('phoneNumber');
    control?.removeValidators([Validators.required]);
    control?.updateValueAndValidity();
  }

  setRequiredValidator() {
    console.log('change triggered.');
    const control = this.registerForm.get('phoneNumber');
    if (this.registerForm.get('contactMethod')?.value === 'phone-number') {
      control?.setValidators([Validators.required]);
      control?.updateValueAndValidity();
    } else {
      control?.removeValidators([Validators.required]);
      control?.updateValueAndValidity();
    }
  }

  validateMatchingPassword(control: AbstractControl): ValidationErrors | null {
    if (
      control.get('password')?.value != control.get('confirmPassword')?.value
    ) {
      return { passwordMismatch: 'Passwords do not match.' };
    }
    return null;
  }
}
