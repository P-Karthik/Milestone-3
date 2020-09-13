import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isPresent:Boolean = false;
  constructor() { }

  toggleIsPresent(){
    this.isPresent = !this.isPresent;
  }

  submit(){
    
    //update password
    /* if(){ //old password matched, update
      this.toggleIsPresent();
    }
    else(){  *///do not update
        
    // }
  }
  ngOnInit(): void {
  }

}
