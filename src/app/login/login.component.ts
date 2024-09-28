import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor (private auth: AuthService, private router: Router) {}
  username:string = "";
  password:string = "";
  errorMsg:string = "";

  login() {
    if(this.username.trim().length === 0) {
      this.errorMsg = "username is required"
    } else if(this.password.length === 0) {
      this.errorMsg = "password is required"
    } else {
      this.errorMsg = ""
      let res: number = this.auth.login(this.username, this.password);
      if(res === 200) {
        this.router.navigate(['home'])
      } else if(res === 403) {
        this.errorMsg = "Invalid Credentials"
      }
    }
  }
}
