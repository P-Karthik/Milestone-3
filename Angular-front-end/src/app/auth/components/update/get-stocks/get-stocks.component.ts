
import { Timestamp } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { StockdetailsModule } from 'src/app/stockdetails/stockdetails.module';
@Component({
  selector: 'app-get-stocks',
  templateUrl: './get-stocks.component.html',
  styleUrls: ['./get-stocks.component.scss']
})
export class GetStocksComponent implements OnInit {

  stockDetails : StockdetailsModule[];
  
  companyCode : String;

  seName : string;

  seName1 : string
  
  request : any;
  
  head = ['id','companyCode','seName','currentPrice','date'];
  headers = [];


  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
      this.headers = this.head;
      this.request = {
        "companyCode" : this.companyCode,
        "seName" : this.seName
      }
      // this.stockDetails[0] = this.stocktemp
      // this.request = {
      //   "companyName" : this.companyname
      // }
      let dat = this.authService.getStocksBy(this.request);
      dat.subscribe(data=>this.stockDetails=data,);
      // console.log(typeof this.ipodetails);
      //  this.response.Object_forEach(element => {
      //    this.responsepage.push(element.remarks)
      // });
  }

  onDelete() {
    this.request='';
    this.request = {
      "seName" : this.seName1
    }
    const StockDeleteObserver = {
      next: x => console.log('Deleted the Stocks'),
      error: err => console.log(err)
    };
    this.authService.deleteStocks(this.request).subscribe(StockDeleteObserver);
    this.request = null;
  }
}
