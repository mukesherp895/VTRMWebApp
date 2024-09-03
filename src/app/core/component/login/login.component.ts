import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { LoginUserVM } from 'src/app/ViewModel/login-user-vm.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   userFrom!: FormGroup;
   loginDto: LoginUserVM;
   constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){
    this.loginDto = new LoginUserVM();
   }
  ngOnInit(): void {
    this.userFrom = this.fb.group({
      email: [this.loginDto.email, [Validators.required, Validators.email]],
      password: [this.loginDto.password, Validators.required]
    });
  }

  onSubmit(){
    if(this.userFrom.valid)
    {
      this.loginDto = this.userFrom.value;
      this.authService.login(this.loginDto.email, this.loginDto.password).subscribe(isAuth => {
        if(isAuth)
        {
          this.router.navigate(['/']);
        }
        else{
          console.log('login fail');
        }
      })
    }
    else{
      console.log('invalid form');
    }

  }
  
}
