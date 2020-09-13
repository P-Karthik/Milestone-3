import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserdetailsModule {
  id: number;
  username: string;
  password: string;
  isAdmin: boolean;
  email: string;
  mobile: number;
  confirmed: boolean;
 }
