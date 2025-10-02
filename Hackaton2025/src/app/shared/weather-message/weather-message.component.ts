import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-message',
  standalone: false,
  templateUrl: './weather-message.component.html',
  styleUrl: './weather-message.component.css'
})
export class WeatherMessageComponent {
  @Input() type: number = 2;
  titulos: string[] = ['Clima perfecto', 'Un poco de calor', 'Mucho calor', 'Probabilidades de un poco de lluvia', 'Altas probabilidades de lluvia'];
  descripcion: string[] = ['¡Día ideal! El clima está perfecto para salir y aprovecharlo.', 'El clima está algo caluroso, viste ligero y disfruta tu día.', 'Hace demasiado calor, mantente hidratado y evita exponerte al sol por mucho tiempo.', 'Podría llover más tarde, lleva un paraguas por si acaso.', 'Quédate en casa, es un mal día para salir.'];
  imagenes: string[] = [
    'assets/clouds_icon/1.png',
    'assets/clouds_icon/2.png',
    'assets/clouds_icon/3.png',
    'assets/clouds_icon/4.png',
    'assets/clouds_icon/5.png'
  ];

  background: string[] = [
    "linear-gradient(to bottom,rgba(0, 17, 255, 0.75), rgba(61, 193, 211, 0.75)), url('/assets/cloud_background.png')",
    "linear-gradient(to bottom,rgba(254, 197, 75, 0.75), rgba(141, 196, 255, 0.75)), url('/assets/cloud_background.png')",
    "linear-gradient(to top,rgba(216, 234, 96, 0.75), rgba(214, 79, 42, 0.75)), url('/assets/cloud_background.png')",
    "linear-gradient(to top,rgba(155, 213, 255, 0.75), rgba(127, 137, 160, 0.75)), url('/assets/cloud_background.png')",
    "linear-gradient(to bottom,rgba(59, 59, 59, 0.753), rgba(133, 133, 133, 0.753)), url('/assets/cloud_background.png')"
  ];
  colors: string[] = [
    "rgba(0, 254, 131, 1)", 
    "rgba(255, 225, 0, 1)", 
    "rgba(255, 255, 255, 1)", 
    "rgba(17, 0, 255, 0.749)", 
    "rgba(17, 0, 255, 0.749)"];
}
