import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;
  isLoggedIn: boolean = false;

  constructor() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'false';
  }

  login() {
    console.log(`Logging in with email ${this.email} and password ${this.password}.`);
     localStorage.setItem('isLoggedIn', 'true');
    this.isLoggedIn = true;
  }
}
