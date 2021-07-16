import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  email = '';
  password = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  submit(): void {
    this.auth.signIn(this.email, this.password);
  }
}
