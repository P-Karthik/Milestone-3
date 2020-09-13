import { StockdetailsModule } from 'src/app/stockdetails/stockdetails.module';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-display-stock',
  templateUrl: './display-stock.component.html',
  styleUrls: ['./display-stock.component.scss']
})
export class DisplayStockComponent implements OnInit {

  stockDetails : StockdetailsModule[] = [];
  
  
  stockid : number;
  
  request : any;
  
  head = ['id','companyCode','seName','currentPrice','date'];
  headers = [];

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
    this.headers = this.head
      this.request = this.stockid;
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

  onAllStocks() {
    this.headers = this.head
    let dat = this.authService.getAllStocks();
    dat.subscribe(data=>this.stockDetails=data,);
  }

}
