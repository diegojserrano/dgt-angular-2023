import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  formulario: UntypedFormGroup;
  mensajeError: string;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private autenticacionService: AutenticacionService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.tokenService.obtenerToken()) {
      this.router.navigate(['/privado/principal']);
      return;
    }
  }

  ingresar() {
    if (this.formulario.invalid) {
      this.mostrarMensaje('Formulario invalido');
      return;
    }

    const objeto = this.formulario.value;
    this.autenticacionService.ingresar(objeto.usuario, objeto.clave).subscribe({
      next: (res) => {
        this.tokenService.guardarToken(res.accessToken);
        this.tokenService.guardarUsuario(res);

        this.router.navigate(['/privado/principal']);
      },
      error: (err) => {
        this.mostrarMensaje(err?.error?.message);
        console.log(err);
      },
    });
  }

  private mostrarMensaje(mensaje: string) {
    this.mensajeError = mensaje;

    setTimeout(() => {
      this.mensajeError = '';
    }, 1000);
  }
}
