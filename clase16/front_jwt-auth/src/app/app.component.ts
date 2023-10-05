import { Component } from '@angular/core';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jwt-auth-test';

  constructor(private tokenService: TokenService) {}

  cerrarSesion() {
    this.tokenService.cerrarSesion();
  }
}
