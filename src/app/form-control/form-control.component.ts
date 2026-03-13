import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss',
})
export class FormControlComponent implements OnInit {
  // username = new FormControl('', [Validators.required]);
  constructor(private fb: FormBuilder) {
    this.fb.group({
      username: [''],
      email: ['', Validators.required],
    });
  }

  registerForm = new FormGroup(
    {
      username: new FormControl('', [this.myRequiredFn]),
      email: new FormControl('', [Validators.email]),
    },
    [Validators.required],
  );
  ngOnInit(): void {
    console.log(this.registerForm);
  }

  myRequiredFn(control: AbstractControl): ValidationErrors | null {
    if (control.value.length === 0)
      return { required: 'This is a required input.' };
    return null;
  }
}
