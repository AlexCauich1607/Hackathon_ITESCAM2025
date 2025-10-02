import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { MapDialogComponent } from '../../shared/map-dialog/map-dialog.component';
import { Router } from '@angular/router';
import { CalendarDialogComponent } from '../../shared/calendar-dialog/calendar-dialog.component';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showCalendar = false;

  openDatePicker() {
    this.dateInput.nativeElement.click();
  }
  closeCalendar() { this.showCalendar = false; }

  onDateSelected(event: any) {
    this.dateButtonText = event.target.value;
    this.closeCalendar();
  }
  @ViewChild('picker') picker!: MatDatepicker<Date>;
  @ViewChild('dateInput') dateInput!: ElementRef<HTMLInputElement>;

  selectedDate: Date | null = null;
  location: { lat: number; lng: number } | null = null;
  locText: string = "Seleccionar Ubicación";
  dateButtonText: string = "Seleccionar fecha";

  constructor(private dialog: MatDialog, private router: Router) { }

  goReport() {
    this.router.navigate(['/report'], { queryParams: { lat: this.location?.lat, lng: this.location?.lng, date: this.dateButtonText } });
  }
  abrirCalendario() {
    const dialogRef = this.dialog.open(CalendarDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(fecha => {
      if (fecha) {
        this.dateButtonText = fecha.toLocaleDateString();
      }
    });
  }
  openPicker() {
    this.picker.open();
  }
  onDateChange(event: any) {
    if (this.selectedDate) {
      this.dateButtonText = this.selectedDate.toLocaleDateString();
    } else {
      this.dateButtonText = "Seleccionar fecha";
    }
  }

  openMap() {
    const dialogRef = this.dialog.open(MapDialogComponent, { width: '500px' });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.location = result;
        this.locText = "Lat: " + this.location?.lat.toFixed(4) + ", Lng: " + this.location?.lng.toFixed(4);
      }
    });
  }
}