import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    // private authService: AuthService,
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    // if(this.form.valid){
    //   const value = this.form.value;
    //   this.authService.login(value.email, value.password)
    //   .then(()=>{
    //     this.router.navigate(['/admin'])
    //   })
    //   .catch(()=> {
    //     alert('no es valido')
    //    });
    // }
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
