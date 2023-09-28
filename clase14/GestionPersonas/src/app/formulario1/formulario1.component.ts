import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component {

  public formulario: FormGroup;

  constructor(private fb: FormBuilder){
    this.formulario = fb.group({
      precio: ['',[Validators.required,
        Validators.max(2000),
        Validators.pattern('-?[0-9]+(\\.?[0-9]+)?')]],
      titulo: ["",[
        Validators.required,
        Validators.maxLength(25)  
      ]]
    })
  }

  public titulo = new FormControl("",
    [
      Validators.required,
      Validators.maxLength(25)
    ]
  );
  public precio = new FormControl("",[
    Validators.required,
    Validators.max(2000),
    Validators.pattern('-?[0-9]+(\\.?[0-9]+)?')
  ]);

  guardar(){
    alert(this.titulo.value + " " + this.precio.value)
  }


}
