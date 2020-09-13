import { FusionChartsModule } from 'angular-fusioncharts';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FormsModule, NgForm} from '@angular/forms';
import { UserpageComponent } from './components/userpage/userpage.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { ManagecompanyComponent } from './components/managecompany/managecompany.component';
import { ManageexchangeComponent } from './components/manageexchange/manageexchange.component';
import { ManageipoComponent } from './components/manageipo/manageipo.component';
import { ProfileComponent } from './components/profile/profile.component';
import { IpoComponent } from './components/ipo/ipo.component';
import { GetIpoComponent } from './components/update/get-ipo/get-ipo.component';
import { GetCompanyComponent } from './components/update/get-company/get-company.component';
import { GetStocksComponent } from './components/update/get-stocks/get-stocks.component';
import { ManagestocksComponent } from './components/managestocks/managestocks.component';
import { GetStockExchangeComponent } from './components/update/get-stock-exchange/get-stock-exchange.component';
import { DisplayComapnyComponent } from './components/userfunctionalities/display-comapny/display-comapny.component';
import { DisplayStockComponent } from './components/userfunctionalities/display-stock/display-stock.component';
import { DisplayStockExchangeComponent } from './components/userfunctionalities/display-stock-exchange/display-stock-exchange.component';
import { DisplayIpoComponent } from './components/userfunctionalities/display-ipo/display-ipo.component';
import { ChartsComponent } from './components/charts/charts.component';


import { TimeSeries } from 'fusioncharts/viz/timeseries';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as TimeSerie from 'fusioncharts/fusioncharts.timeseries';
import { LogoutComponent } from './components/logout/logout.component';
import { LogoutbtComponent } from './components/logoutbt/logoutbt.component';
import { Charts1Component } from './components/charts1/charts1.component';
import { ImportexcelComponent } from './components/importexcel/importexcel.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme, TimeSerie);



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent, UserpageComponent, AdminpageComponent, ManagecompanyComponent, ManageexchangeComponent, ManageipoComponent, ProfileComponent, IpoComponent, GetIpoComponent, GetCompanyComponent, GetStocksComponent, ManagestocksComponent, GetStockExchangeComponent, DisplayComapnyComponent, DisplayStockComponent, DisplayStockExchangeComponent, DisplayIpoComponent, ChartsComponent, LogoutComponent, LogoutbtComponent, Charts1Component, ImportexcelComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    SharedModule,
    FusionChartsModule
  ],
  exports: [
    LoginComponent, RegisterComponent, ResetPasswordComponent
  ]
})
export class AuthModule { 
  
}
