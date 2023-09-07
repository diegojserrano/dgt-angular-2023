import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mitadMayusculas' })
export class MitadMayusculasPipe implements PipeTransform {

  transform(value: any): string {
    let texto: string = value

    let mitad = texto.length/2
    return texto.substring(0,mitad).toUpperCase() +  texto.substring(mitad).toLowerCase() 
  }

}
