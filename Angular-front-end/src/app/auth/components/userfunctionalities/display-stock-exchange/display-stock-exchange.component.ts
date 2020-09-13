import { Component, OnInit } from '@angular/core';
import { SectorexchangeModule } from 'src/app/sectorexchange/sectorexchange.module';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-display-stock-exchange',
  templateUrl: './display-stock-exchange.component.html',
  styleUrls: ['./display-stock-exchange.component.scss']
})
export class DisplayStockExchangeComponent implements OnInit {
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

}
