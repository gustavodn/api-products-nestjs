import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
	MatMenuModule,
	MatInputModule,
	MatButtonModule,
	MatIconModule,
	MatDividerModule,
	MatCardModule,
	MatGridListModule

  ],
  exports: [
    MatToolbarModule,
	MatMenuModule,
	MatInputModule,
	MatButtonModule,
	MatDividerModule,
	MatIconModule,
	MatCardModule,
	MatGridListModule
    ],
})
export class MaterialModule { }
