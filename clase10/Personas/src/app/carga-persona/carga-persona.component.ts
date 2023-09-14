import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-carga-persona',
  templateUrl: './carga-persona.component.html',
  styleUrls: ['./carga-persona.component.css']
})
export class CargaPersonaComponent {
    @Input({ required: true }) persona = {
        id: 0,
        nombre: "",
        apellido: "",
        edad: 0
     }

    @Input({ transform: booleanAttribute }) agregando: boolean = false

    @Output() alGuardar = new EventEmitter<object>()
    @Output() alCancelar = new EventEmitter<any>()
  
    guardar() { this.alGuardar.emit(this.persona) }

    cancelar() { this.alCancelar.emit()}

}
