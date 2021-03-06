import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';




const material = [
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatFormFieldModule
];

@NgModule({
  imports: [
    material
  ],
  exports:[
    material
  ]
})
export class MaterialModule { }
