import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-select-fields-dialog',
  standalone: false,
  templateUrl: './select-fields-dialog.component.html',
  styleUrls: ['./select-fields-dialog.component.css']
})
export class SelectFieldsDialogComponent {
  camposSeleccionados: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<SelectFieldsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { campos: string[], seleccionados: string[] }
  ) {
    // Inicializamos con los campos ya seleccionados
    this.camposSeleccionados = [...data.seleccionados];
  }

  toggleCampo(event: any) {
    const value = event.target.value;
    if (event.target.checked) {
      this.camposSeleccionados.push(value);
    } else {
      this.camposSeleccionados = this.camposSeleccionados.filter(c => c !== value);
    }
  }

  guardar() {
    this.dialogRef.close(this.camposSeleccionados);
  }

  cancelar() {
    this.dialogRef.close(this.data.seleccionados);
  }
}
