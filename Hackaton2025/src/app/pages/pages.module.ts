import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';  // o '@angular/material/core' para tipos de fecha nativos
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReportComponent } from './report/report.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, ReportComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    SharedModule
  ],exports:[
  ]

})
export class PagesModule { }
