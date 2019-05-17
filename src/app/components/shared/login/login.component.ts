import { Component, OnInit } from '@angular/core';
import {SecurityService} from '../../../services/security.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  usuario: string;
  password: string;

  constructor(private securityService: SecurityService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.securityService.login(this.usuario, this.password)) {
      this.router.navigate(['/actividades']);
    } else {
      setTimeout(() => {
        window.location.reload();
      },2000);
    }
  }

  logout() {
    this.securityService.logOut();
  }

  getAuthenticatedState() {
    return this.securityService.getState();
  }

}
