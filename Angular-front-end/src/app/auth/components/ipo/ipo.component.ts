import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.scss']
})
export class IpoComponent implements OnInit {

  companyid :  number;
  companyname : Text;
  se : Text;
  pps : number;
  tns : number;
  odt : Timestamp<Date>;
  remarks : Text;

  request : any;
  
  ipoList : any = ['hello','hey'];
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    this.request = {
      "id" : this.companyid,
      "companyName" : this.companyname,
      "seName" : this.se,
      "pricePerShare" : this.pps,
      "totalShares" : this.tns,
      "openDateTime" : this.odt,
      "remarks" : this.remarks
    }
    const IpoUpdateObserver = {
      next: x => console.log('Updated the ipo'),
      error: err => console.log(err)
    };
    let tkn = this.authService.updateIpo(this.request).subscribe(IpoUpdateObserver);
  }

}
