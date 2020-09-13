import { AuthService } from './../../../../shared/services/auth.service';
import { SectorexchangeModule } from './../../../../sectorexchange/sectorexchange.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-get-stock-exchange',
  templateUrl: './get-stock-exchange.component.html',
  styleUrls: ['./get-stock-exchange.component.scss']
})
export class GetStockExchangeComponent implements OnInit {

  stockExchange  : SectorexchangeModule[];
  id : number;
  request : any;
  head = ['id','seName','about','contact','remarks'];
  headers = [];
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
    this.headers = this.head
    // this.stockDetails[0] = this.stocktemp
    // this.request = {
    //   "companyName" : this.companyname
    // }
    let dat = this.authService.getStockExchange();
    dat.subscribe(data=>this.stockExchange=data,);
    // console.log(typeof this.ipodetails);
    //  this.response.Object_forEach(element => {
    //    this.responsepage.push(element.remarks)
    // });
}

onDelete() {
  this.request = {
    "id" : this.id
  }
  const StockExchangeDeleteObserver = {
    next: x => console.log('Deleted the StockExchange'),
    error: err => console.log(err)
  };
  this.authService.deleteStockExchange(this.request).subscribe(StockExchangeDeleteObserver);
  this.request = null;
}
}
