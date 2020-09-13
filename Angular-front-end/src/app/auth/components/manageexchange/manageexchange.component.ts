import { AuthService } from 'src/app/shared/services/auth.service';
import { SectorexchangeModule } from './../../../sectorexchange/sectorexchange.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manageexchange',
  templateUrl: './manageexchange.component.html',
  styleUrls: ['./manageexchange.component.scss']
})
export class ManageexchangeComponent implements OnInit {

  id : number;
  seName : Text;
  about : Text;
  contact : Text;
  remarks : Text;

  request : any;

  stockExchange : SectorexchangeModule;
  constructor(private authService : AuthService) { }
  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
    this.request = {
      "id" : this.id,
      "seName" : this.seName,
      "about" : this.about,
      "contact" :this.contact,
      "remarks" : this.remarks
    }
    const StockExchangeUpdateObserver = {
      next: x => console.log('Updated the StockExchange'),
      error: err => console.log(err)
    };
      let dat = this.authService.updateCompany(this.request).subscribe(StockExchangeUpdateObserver);
      // dat.subscribe(data=>this.companyDetails=data);
      //  this.response.Object_forEach(element => {
      //    this.responsepage.push(element.remarks)
      // });
  }
}
