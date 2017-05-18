import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services';
import { User } from '../../models';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public signUpForm: FormGroup;

  public roles = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'student', viewValue: 'Student' },
    { value: 'professor', viewValue: 'Professor' }
  ];

  public genders = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' }
  ];

  constructor(private route: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.buildSignUpForm();
  }

  buildSignUpForm(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', []],
      name: ['', [Validators.required, Validators.minLength(6)]],
      birthDate: ['', [Validators.required, Validators.pattern(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/)]],
      gender: ['', []],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^01[0-2][0-9]{8}$/)]]
    });
  }

  onSignUpFormSubmit(): void {
    const user = new User();
    user.name = this.signUpForm.value.name;
    user.phone = this.signUpForm.value.phone;
    user.email = this.signUpForm.value.email;
    user.password = this.signUpForm.value.password;
    user.role = this.signUpForm.value.role;
    user.gender = this.signUpForm.value.gender;
    this.authenticationService.signUp(user);
  }
}
