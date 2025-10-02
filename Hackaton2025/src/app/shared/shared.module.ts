import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MapDialogComponent } from './map-dialog/map-dialog.component';
import { WeatherMessageComponent } from './weather-message/weather-message.component';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SelectFieldsDialogComponent } from './select-fields-dialog/select-fields-dialog.component';
import { CalendarDialogComponent } from './calendar-dialog/calendar-dialog.component';


import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
    declarations: [NavbarComponent, FooterComponent, MapDialogComponent, WeatherMessageComponent, SelectFieldsDialogComponent, CalendarDialogComponent
    ],
    imports: [
        CommonModule,

        MatSelectModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDialogModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        MapDialogComponent,
        WeatherMessageComponent,
        SharedRoutingModule,
        CalendarDialogComponent
    ]
})
export class SharedModule { }
