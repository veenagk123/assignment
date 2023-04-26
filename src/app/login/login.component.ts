import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;
  isLoggedIn: boolean = false;
  showPassword: boolean = false;

  constructor(private router: Router) {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'false';
  }

  login() {
    console.log(`Logging in with email ${this.email} and password ${this.password}.`);
    localStorage.setItem('isLoggedIn', 'true');
    this.isLoggedIn = true;
    // console.log(`Navigating to /product with query parameters: emailId=${this.email}`);
    this.router.navigate(['/product'],{queryParams:{emailId:this.email}});
  }
}
