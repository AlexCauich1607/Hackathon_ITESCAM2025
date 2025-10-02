import * as L from 'leaflet';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { SelectFieldsDialogComponent } from '../../shared/select-fields-dialog/select-fields-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { CalendarDialogComponent } from '../../shared/calendar-dialog/calendar-dialog.component';


const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

const DefaultIcon = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

@Component({
  selector: 'app-report',
  standalone: false,
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit {
  map!: L.Map;
  marker!: L.Marker;
  selectedPosition: { lat: number, lng: number } | null = null;
  mostrarLista = false;
  campos: string[] = ['Precipitación', 'Temperatura', 'Humedad', 'Velocidad del Viento'];
  camposSeleccionados: string[] = ['Precipitación', 'Temperatura']; // array para múltiples opciones
  date: string = '00/00/0000'

  constructor(private dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initMap();
    this.route.queryParams.subscribe(params => {
      const camposString = params['campos'];
      if (!this.selectedPosition) {
        this.selectedPosition = { lat: 0, lng: 0 }; 
      }

      this.selectedPosition.lat = params['lat'];
      this.selectedPosition.lng = params['lng'];
      this.date = params['date'];

    });
  }
  abrirCalendario() {
      const dialogRef = this.dialog.open(CalendarDialogComponent, {
        width: '300px'
      });
  
      dialogRef.afterClosed().subscribe(fecha => {
        if (fecha) {
          this.date = fecha.toLocaleDateString();
        }
      });
    }
  initMap() {
    this.map = L.map('map').setView([20.627, -90.400], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.map.on('click', (e: any) => {
      const { lat, lng } = e.latlng;
      this.selectedPosition = { lat, lng };

      if (this.marker) {
        this.marker.setLatLng([lat, lng]);
      } else {
        this.marker = L.marker([lat, lng]).addTo(this.map);
      }
    });
  }
  abrirSelector() {
    const dialogRef = this.dialog.open(SelectFieldsDialogComponent, {
      width: '400px',
      data: {
        campos: this.campos,
        seleccionados: this.camposSeleccionados
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.camposSeleccionados = result;
      }
    });
  }
}
