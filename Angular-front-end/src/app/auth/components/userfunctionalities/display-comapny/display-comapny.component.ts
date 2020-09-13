import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CompanydetailsModule } from 'src/app/companydetails/companydetails.module';

@Component({
  selector: 'app-display-comapny',
  templateUrl: './display-comapny.component.html',
  styleUrls: ['./display-comapny.component.scss']
})
export class DisplayComapnyComponent implements OnInit {
  companyDetails : CompanydetailsModule[];
  companycode : number;

  head = ['companyId','companyName','turnover','ceo','boardOfDirectors','sector','about','companyCode'];
  headers = [];

  request : any;
  response : any;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
    this.headers = this.head
      this.request = {
        "companyCode" : this.companycode
      }
      let dat = this.authService.getCompany(this.request);
      dat.subscribe(data=>this.companyDetails=data);
      // console.log(typeof this.ipodetails);
      //  this.response.Object_forEach(element => {
      //    this.responsepage.push(element.remarks)
      // });
  }
  onAllCompanies() {
    this.headers = this.head
    let dat = this.authService.getAllCompanies();
    dat.subscribe(data=>this.companyDetails=data,);
  }
}

