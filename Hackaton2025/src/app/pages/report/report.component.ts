import * as L from 'leaflet';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SelectFieldsDialogComponent } from '../../shared/select-fields-dialog/select-fields-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { CalendarDialogComponent } from '../../shared/calendar-dialog/calendar-dialog.component';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


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
  camposSeleccionados: string[] = ['Precipitación', 'Temperatura'];
  date: string = '00/00/0000';
  pre: number = 0;
  temp: number = 0;
  hum: number = 0;
  vien: number = 0;

  num: number = 0;

  variables = [
    { variable: 'Precipitación', value: 0 },
    { variable: 'Temperatura', value: 0 },
    { variable: 'Humedad', value: 0 },
    { variable: 'Velocidad del Viento', value: 0 }
  ];

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private cd: ChangeDetectorRef) { }

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
      this.generarDatosAleatorios();
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
  exportarExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.variables);

    const workbook: XLSX.WorkBook = {
      Sheets: { 'Variables': worksheet },
      SheetNames: ['Variables']
    };

    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    const data: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'VariablesClima.xlsx');
  }

  getValor(nombre: string): number {
    const item = this.variables.find(v => v.variable === nombre);
    return item ? item.value : 0;
  }


  getRandom(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }


  generarDatosAleatorios() {
    this.pre = this.getRandom(0, 100);
    this.temp = this.getRandom(0, 100);
    this.hum = this.getRandom(0, 100);
    this.vien = this.getRandom(0, 120);
    this.variables = this.variables.map(v => {
      let valorAleatorio = 0;

      switch (v.variable) {
        case 'Precipitación':
          valorAleatorio = this.getRandom(0, 100);
          break;
        case 'Temperatura':
          valorAleatorio = this.getRandom(0, 100);
          break;
        case 'Humedad':
          valorAleatorio = this.getRandom(0, 100);
          break;
        case 'Velocidad del Viento':
          valorAleatorio = this.getRandom(0, 120);
          break;
      }


      return { ...v, value: Math.round(valorAleatorio * 10) / 10 };
    });


    this.getState();
  }

  getState() {
    let p = Math.round(this.pre);
    console.log('Pre:', p);
    console.log('Pre:', this.pre);
    if (p < 40) {
      this.num = 0;
    } else if (p < 80) { 
      this.num = 3;
    } else {
      this.num = 4;
    }

  }
}
