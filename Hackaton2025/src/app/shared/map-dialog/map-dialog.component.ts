import * as L from 'leaflet';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

// 👇 FIX: Forzar el ícono del marker en Angular
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
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  standalone: false,
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent implements OnInit {
  map!: L.Map;
  marker!: L.Marker;
  selectedPosition: { lat: number, lng: number } | null = null;

  constructor(private dialogRef: MatDialogRef<MapDialogComponent>) {}

  ngOnInit() {
    this.initMap();
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

  close() {
    this.dialogRef.close(this.selectedPosition); 
  }
}
