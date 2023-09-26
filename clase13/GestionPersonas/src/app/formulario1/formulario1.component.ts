import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component {

  public formulario: FormGroup

  constructor(private fb: FormBuilder) {
    this.formulario =  fb.group({
      titulo: ["Titulo", [
        Validators.required,
        Validators.maxLength(10)
      ]],
      precio: [0,[
        Validators.required,
        Validators.min(0),
        Validators.max(1000),
      ]]
    })
  }




  //public titulo = new FormControl("Titulo",[
  //  Validators.required,
  //  Validators.maxLength(10)
  //]);
  //public precio = new FormControl(0,[
  //  Validators.required,
  //  Validators.min(0),
  //  Validators.max(1000),
  // ]);

  public guardar() {
    alert(this.formulario.value)
  }
  



}
