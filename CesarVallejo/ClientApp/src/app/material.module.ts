import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatTableModule
} from '@angular/material';

const material = [
  MatButtonModule,
  MatTableModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
