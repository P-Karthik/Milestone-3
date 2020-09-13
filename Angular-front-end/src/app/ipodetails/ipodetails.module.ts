import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class IpodetailsModule {
  id: number;
  companyName: string;
  seName: string;
  pricePerShare: number;
  totalShares : number;
  openDateTime: Timestamp<Date>;
  remarks: string;
 }
