import { ColumnOneComponent } from './shared/layouts/column-one/column-one.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';

const routes: Routes = [
  {path:'', component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
