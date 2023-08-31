import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-subtitulo',
  templateUrl: './subtitulo.component.html',
  styleUrls: ['./subtitulo.component.css']
})
export class SubtituloComponent {
  @Input() texto = "Este es un título de segundo nivel"
  @Input({ transform: booleanAttribute }) destacado = false
}
