import { Timestamp } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IpodetailsModule } from 'src/app/ipodetails/ipodetails.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manageipo',
  templateUrl: './manageipo.component.html',
  styleUrls: ['./manageipo.component.scss']
})
export class ManageipoComponent implements OnInit {

  constructor(private authService:AuthService) { }
  ipodetails : IpodetailsModule;
 
  request : any;


  id : number
  companyName : string
  seName : string
  pricePerShare : number
  totalShares : number
  openDateTime : Timestamp<Date>
  remarks : string
  

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    this.request = {
      "id" : this.id,
      "companyName" : this.companyName,
      "seName" : this.seName,
      "pricePerShare" : this.pricePerShare,
      "totalShares" : this.totalShares,
      "openDateTime" : this.openDateTime,
      "remarks" : this.remarks
    }
    const IpoUpdateObserver = {
      next: x => console.log('Updated the ipo'),
      error: err => console.log(err)
    };
    let tkn = this.authService.updateIpo(this.request).subscribe(IpoUpdateObserver);
  }

}
