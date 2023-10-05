import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  usuario: any;

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.usuario = this.tokenService.obtenerUsuario();
  }

}
