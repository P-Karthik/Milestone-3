import { Timestamp } from 'rxjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StockdetailsModule {
  id : number;
  companyCode : string;
  seName : string;
  currentPrice : number;
  date : Timestamp<Date>
 }
