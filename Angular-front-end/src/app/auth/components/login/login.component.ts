import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService,private router : Router) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    const loginObserver = {
      next: x => console.log('User logged in'),
      error: err => console.log(err)
    };
    let tkn = this.authService.login(f.value);
    tkn.subscribe(data => this.porcessapi(data['jwt']));
  }
  onGo(f : NgForm) {
    this.router.navigate(['userpage']);
  }

  porcessapi(model : any) {
    this.authService.tokenStorage(model);
    this.router.navigate(['userpage']);
  }
}
