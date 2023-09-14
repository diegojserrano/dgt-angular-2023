import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {
  /* Recibe una persona y retorna una cadena */

  transform(value: any, ...args: unknown[]): string {
    return `${value.apellido}, ${value.nombre}`
  }

}
