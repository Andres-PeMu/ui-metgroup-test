import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { registerUser } from 'src/app/core/models/auth.model';
import { UserService } from 'src/app/core/services/auth/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  register(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const dataRegister: registerUser = this.form.value;
      this.userService.createUser(dataRegister).subscribe(() => {
        this.router.navigate(['/auth/login']);
      })
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

}
