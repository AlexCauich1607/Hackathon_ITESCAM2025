import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
 selector: 'app-calendar-dialog',
  standalone: false,
  templateUrl: './calendar-dialog.component.html',
  styleUrl: './calendar-dialog.component.css'
})
export class CalendarDialogComponent {
  selectedDate: Date | null = null;

  constructor(public dialogRef: MatDialogRef<CalendarDialogComponent>) {}

  dateSelected(date: Date) {
    this.selectedDate = date;
    this.dialogRef.close(this.selectedDate); // Devuelve la fecha al componente padre
  }

  cancelar() {
    this.dialogRef.close();
  }
}
