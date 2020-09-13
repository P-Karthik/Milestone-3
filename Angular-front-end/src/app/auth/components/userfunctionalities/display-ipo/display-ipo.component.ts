import { Component, OnInit } from '@angular/core';
import { IpodetailsModule } from 'src/app/ipodetails/ipodetails.module';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-display-ipo',
  templateUrl: './display-ipo.component.html',
  styleUrls: ['./display-ipo.component.scss']
})
export class DisplayIpoComponent implements OnInit {

  
  ipodetails : IpodetailsModule[];
  head = ['id','companyName','seName','pricePerShare','totalShares','openDateTime','remarks'];
  headers = [];
  companyname : Text;
  id : number;



  request : any;
  response : any;

  responsepage : string[] = [];
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
      this.headers = this.head
      this.request = {
        "companyName" : this.companyname
      }
      let dat = this.authService.getIpo(this.request);
      dat.subscribe(data=>this.ipodetails=data);
      // console.log(typeof this.ipodetails);
      //  this.response.Object_forEach(element => {
      //    this.responsepage.push(element.remarks)
      // });
  }

  onAllIpos() {
    this.headers = this.head
    // this.ipodetails = [
    //   {
    //     "id" : 1,
    //     "companyName" : 'WF',
    //     "seName" :  'BSE',
    //     "pricePerShare" : 1234,
    //     "totalShares" : 12,
    //     "openDateTime" : new Date(),
    //     "remarks" : 'Good'
    //   }
    // ]
    let dat = this.authService.getAllIpo();
    dat.subscribe(data=>this.ipodetails=data,);
  }

}
