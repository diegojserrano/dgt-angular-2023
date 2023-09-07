import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semaforoEdad'
})
export class SemaforoEdadPipe implements PipeTransform {

  transform(value: number, ): string {
    if (value <= 12) return "assets/rojo.png"
    if (value < 18) return "assets/amarillo.png"
    return "assets/verde.png"
  }

}
