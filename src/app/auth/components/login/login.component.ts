import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { login } from 'src/app/core/models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.buildForm();
  }

  login(event: Event) {
    event.preventDefault();
    if(this.form.valid){
      const dataLogin: login = this.form.value;
      this.authService.login(dataLogin).subscribe(resDataLogin => {
        this.authService.setToken(resDataLogin.token);
        this.authService.setUser(resDataLogin.user.userName)
        this.authService.isLoggedIn = true;
        this.router.navigate(['/']);
      })
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

}
