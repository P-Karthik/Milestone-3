import { Timestamp } from 'rxjs';
import { StockdetailsModule } from './../../../stockdetails/stockdetails.module';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-managestocks',
  templateUrl: './managestocks.component.html',
  styleUrls: ['./managestocks.component.scss']
})
export class ManagestocksComponent implements OnInit {


  request : any;
  
  id: number
  companyCode : Text
  seName : Text
  currentPrice : number
  date : Timestamp<Date>

  response : any;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
    this.request = {
      "id" : this.id,
      "companyCode" : this.companyCode,
      "seName" : this.seName,
      "currentPrice" : this.currentPrice,
      "date" : this.date
    }
    const StockUpdateObserver = {
      next: x => console.log('Updated the Stock'),
      error: err => console.log(err)
    };
      this.authService.updateStocks(this.request).subscribe(StockUpdateObserver);
      // dat.subscribe(data=>this.companyDetails=data);
      //  this.response.Object_forEach(element => {
      //    this.responsepage.push(element.remarks)
      // });
  }
}
