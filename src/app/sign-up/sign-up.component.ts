import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  email = '';
  password = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  submit(): void {
    this.auth.signUp(this.email, this.password);
  }
}
