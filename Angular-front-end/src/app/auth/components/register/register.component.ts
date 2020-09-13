import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isAdmin : boolean = false;
  Confirmation : boolean = true;
  uname : Text;
  passworded : Text;
  emailid : Text;
  mobilenum : number;


  request : any;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    this.request = {
      "username" : this.uname,
      "password" : this.passworded,
      "email" : this.emailid,
      "mobile" : this.mobilenum,
      "isAdmin" : this.isAdmin,
      "confirmed" : this.Confirmation
    };
    const RegisterObserver = {
      next: x => console.log('User Registered  in'),
      error: err => console.log(err)
    };
    let tkn = this.authService.register(this.request).subscribe(RegisterObserver);
  }
}
