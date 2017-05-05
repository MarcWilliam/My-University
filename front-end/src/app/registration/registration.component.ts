import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';
import { User } from '../user';


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

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.buildSignUpForm();
  }

  buildSignUpForm(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', []]
    })
  }

  onSignUpFormSubmit(): void {
    const user = new User();
    user.name = "Abdelrahman Abdelhamed";
    user.phone = 1128551888;
    user.email = this.signUpForm.value.email;
    user.password = this.signUpForm.value.password;
    user.role = this.signUpForm.value.role;
    this.authenticationService.signUp(user);
  }

}