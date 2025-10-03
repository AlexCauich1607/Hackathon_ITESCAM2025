import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable-container',
  standalone: false,
  templateUrl: './variable-container.component.html',
  styleUrl: './variable-container.component.css'
})
export class VariableContainerComponent implements OnInit {
  @Input() title: string = "";
  @Input() value: number = 0;
  imagen: string = "";
  txt: string = "";
  constructor() { }

  ngOnInit(): void {
    this.imagen = "assets/icons/" + this.title + ".png";
    this.txt = this.value+" %";
    if (this.title === 'Precipitación') {
      if (this.value >= 0 && this.value < 40) {
        this.imagen = "assets/icons/" + this.title + "0.png";
      } else  if (this.value >= 40 && this.value < 80) {
        this.imagen = "assets/icons/" + this.title + "1.png";
      }else{
          this.imagen = "assets/icons/" + this.title + "2.png";
      }
    }else if(this.title === 'Velocidad del Viento'){
       this.txt = this.value+" Km/H";
    }
  }
}
