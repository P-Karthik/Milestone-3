import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [ColumnOneComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ColumnOneComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
