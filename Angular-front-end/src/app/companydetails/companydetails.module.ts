import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CompanydetailsModule { 
  companyId: number;
  companyName: string;
  turnover: number;
  ceo: string;
  boardOfDirectors : string[];
  sector: string;
  about: string;
  companyCode: string;
}



