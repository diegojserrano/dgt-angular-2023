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
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formulario: UntypedFormGroup;
  mensajeError: string;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private tokenService: TokenService,
    private autenticacionService: AutenticacionService,
    private router: Router
  ) {
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      clave: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.tokenService.obtenerToken()) {
      this.router.navigate(['/privado/principal']);
      return;
    }
  }

  registrar() {
    if (this.formulario.invalid) {
      this.mostrarMensaje('Formulario invalido');
      return;
    }

    const objeto = this.formulario.value;
    this.autenticacionService
      .registrar(objeto.usuario, objeto.correoElectronico, objeto.clave)
      .subscribe({
        next: () => {
          this.router.navigate(['ingreso']);
        },
        error: (err) => {
          this.mostrarMensaje(err?.error?.message);
        },
      });
  }

  private mostrarMensaje(mensaje: string) {
    this.mensajeError = mensaje;
  }
}
