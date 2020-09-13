import { StockdetailsModule } from './stockdetails/stockdetails.module';
import { SectordetailsModule } from './sectordetails/sectordetails.module';
import { SectorexchangeModule } from './sectorexchange/sectorexchange.module';
import { UserdetailsModule } from './userdetails/userdetails.module';
import { CompanydetailsModule} from './companydetails/companydetails.module';
import { IpodetailsModule } from './ipodetails/ipodetails.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthModule } from "./auth/auth.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TimeSeries } from 'fusioncharts/viz/timeseries';
import {FusionChartsModule} from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as TimeSerie from 'fusioncharts/fusioncharts.timeseries';

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme, TimeSerie);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    AuthModule,
    HttpClientModule,
    IpodetailsModule,
    CompanydetailsModule,
    UserdetailsModule,
    SectorexchangeModule,
    SectordetailsModule,
    StockdetailsModule,
    BrowserAnimationsModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
