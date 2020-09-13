import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logoutbt',
  templateUrl: './logoutbt.component.html',
  styleUrls: ['./logoutbt.component.scss']
})
export class LogoutbtComponent implements OnInit {

  constructor(private authService : AuthService,private router : Router) { }

  ngOnInit(): void {
  }

  deletetoken() {
    this.authService.deletetokenStorage();
    this.router.navigate(['logout']);
  }

}
