import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

public signUpForm: FormGroup;

  constructor( private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
   }

  ngOnInit(): void {
    this.buildSignUpForm();
  }

  buildSignUpForm(): void {
      this.signUpForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/) ] ],
        password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSignUpFormSubmit(): void {
    this.authService.signup(this.signUpForm.value.email, this.signUpForm.value.password);
  }

}