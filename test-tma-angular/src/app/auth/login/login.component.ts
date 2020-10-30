import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private router: Router,
              private authService: AuthService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
      });
  }

  get fval() { return this.loginForm.controls; }

  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
    return;
    }
    this.loading = true;
    this.authService.signIn(this.fval.username.value, this.fval.password.value)
    .subscribe(
    data => {
      console.log(data);
      if (data.state === 'succeed') {
        this.router.navigate(['/chat']);
      }
    },
    error => {
    this.toastr.error(error.statusText, 'Error');
    this.loading = false;
    });
    }

  signUp(): void {
    this.router.navigate(['/register'], { relativeTo: this.route });
  }
}
