import { Charts1Component } from './components/charts1/charts1.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ChartsComponent } from './components/charts/charts.component';
import { DisplayStockExchangeComponent } from './components/userfunctionalities/display-stock-exchange/display-stock-exchange.component';
import { DisplayStockComponent } from './components/userfunctionalities/display-stock/display-stock.component';
import { DisplayComapnyComponent } from './components/userfunctionalities/display-comapny/display-comapny.component';
import { DisplayIpoComponent } from './components/userfunctionalities/display-ipo/display-ipo.component';
import { GetStockExchangeComponent } from './components/update/get-stock-exchange/get-stock-exchange.component';
import { GetCompanyComponent } from './components/update/get-company/get-company.component';
import { GetStocksComponent } from './components/update/get-stocks/get-stocks.component';
import { ManagestocksComponent } from './components/managestocks/managestocks.component';
import { ManageipoComponent } from './components/manageipo/manageipo.component';
import { GetIpoComponent } from './components/update/get-ipo/get-ipo.component';
import { HeaderComponent } from './../shared/components/header/header.component';
import { IpoComponent } from './components/ipo/ipo.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ManageexchangeComponent } from './components/manageexchange/manageexchange.component';
import { ManagecompanyComponent } from './components/managecompany/managecompany.component';
import { AuthGuardService } from './../shared/services/auth-guard.service';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'userpage',component:UserpageComponent},
  {path:'adminpage',component:AdminpageComponent,
    children: [
      {path:'getIpo',component:DisplayIpoComponent},
      {path:'getProfile',component:ProfileComponent},
      {path:'userCompany',component:DisplayComapnyComponent},
      {path:'userStocks',component:DisplayStockComponent},
      {path:'getStockExchange',component:DisplayStockExchangeComponent}
    ]
},
  {path:'userpage/getIpo',component:GetIpoComponent},
  {path:'userpage/exchange', component:ManageexchangeComponent},
  {path:'userpage/profile', component:ProfileComponent},
  {path:'userpage/getCompany',component:GetCompanyComponent},
  {path:'userpage/manageipo',component:ManageipoComponent},
  {path:'userpage/managecompany',component:ManagecompanyComponent},
  {path:'userpage/managestocks',component:ManagestocksComponent},
  {path:'userpage/getStocks',component:GetStocksComponent},
  {path:'userpage/getStockExchange',component:GetStockExchangeComponent},
  {path:'userpage/managestockexchange',component:ManageexchangeComponent},
  {path:'adminpage/getCharts',component:ChartsComponent},
  {path:'userpage/getCharts',component:ChartsComponent},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
