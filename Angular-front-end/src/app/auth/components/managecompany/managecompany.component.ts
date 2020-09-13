import { CompanydetailsModule } from './../../../companydetails/companydetails.module';
import { IpodetailsModule } from '../../../ipodetails/ipodetails.module';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { AuthService } from '../../../shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.scss']
})


export class ManagecompanyComponent implements OnInit {

  companyDetails : CompanydetailsModule;
  
  companyId : number;
  companyName : Text;
  turnover : number;
  ceo : Text;
  boardOfDirectors : Text;
  sector : Text;
  about : Text;
  companyCode : Text

  request : any;
  response : any;

  responsepage : string[] = [];
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
    this.request = {
      "companyId" : this.companyId,
      "companyName" : this.companyName,
      "turnover" : this.turnover,
      "ceo" : this.ceo,
      "boardOfDirectors" : this.boardOfDirectors,
      "sector" : this.sector,
      "about" : this.about,
      "companyCode" : this.companyCode
    }
    const CompanyUpdateObserver = {
      next: x => console.log('Updated the Company'),
      error: err => console.log(err)
    };
      let dat = this.authService.updateCompany(this.request).subscribe(CompanyUpdateObserver);
      //dat.subscribe(data=>this.companyDetails=data);
      //  this.response.Object_forEach(element => {
      //    this.responsepage.push(element.remarks)
      // });
  }

}
