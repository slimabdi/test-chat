import { Component, OnInit } from '@angular/core';
import {MatchingPasswordValidator} from './matching-password.validator';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegistrationForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,
    private matchingPasswordValidator: MatchingPasswordValidator,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
      this.userRegistrationForm = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        password: new FormControl('', Validators.minLength(2)),
        confirmPassword: new FormControl('', Validators.minLength(2)),
      },  this.matchingPasswordValidator.passwordMatchValidator);
  }

  get fval() { return this.userRegistrationForm.controls; }

  onFormSubmit() {
    this.submitted = true;
    // return for here if form is invalid
    if (this.userRegistrationForm.invalid) {
    return;
    }
    this.loading = true;
    this.authService.signUp(this.userRegistrationForm.value).subscribe(
    (data) => {
    alert('User Registered successfully!!');
    this.router.navigate(['/login']);
    },
    (error) => {
    this.toastr.error(error.error.message, 'Error');
    this.loading = false;
    }
    );
    }


    logIn(): void {
    this.router.navigate(['/login'], { relativeTo: this.route });
  }

}
