import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

const material = [
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
