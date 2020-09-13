import { StockdetailsModule } from 'src/app/stockdetails/stockdetails.module';
import { SectorexchangeModule } from './../../sectorexchange/sectorexchange.module';
import { CompanydetailsModule } from './../../companydetails/companydetails.module';
import { IpodetailsModule } from './../../ipodetails/ipodetails.module';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:8080/";
  authUrl1 = "http://localhost:8082/";
  authUrl2 = "http://localhost:8083/";
  ipodel ="http://localhost:8082"

  token : any;
  headers = new HttpHeaders();
  constructor(private http : HttpClient) { }

  login(model: any) {
    return this.http.post(this.authUrl + 'authenticate' ,model,{responseType:'json'});
  }

  register(model: any) {
    return this.http.post(this.authUrl + 'users/add', model);
  }

  tokenStorage(model : any) {
    this.token ='Bearer '+ model;
    this.headers.set("Authorization",this.token);
  }

  deletetokenStorage() {
    this.token ='';
  }

  updateIpo(model: any) {
      return this.http.put(this.authUrl1 + 'ipos/update', model,{headers: this.headers,responseType:'json'}); 
  }

  getIpo(model : any) {
    return this.http.post<IpodetailsModule[]>(this.authUrl1 + 'ipos/company',model,{headers: this.headers,responseType:'json'});
  }

  deleteIpo(model : number) :  Observable<any> {
    return this.http.delete(`${this.ipodel}/${'ipos'}/${'delete'}/${model}`,{headers: this.headers});
  }

  getAllIpo() {
    return this.http.get<IpodetailsModule[]>(this.authUrl1 + 'ipos',{headers: this.headers,responseType:'json'});
  }
    

  updateCompany(model: any) {
    return this.http.put(this.authUrl1 + 'companies/update', model,{headers: this.headers,responseType:'json'}); 
}
   
getCompany(model : string) : Observable<any>{
  return this.http.get<CompanydetailsModule[]>(`${this.authUrl1}+${'companies'}/${'code'}/${model}`,{headers: this.headers,responseType:'json'});
}

deleteCompany(model : string) : Observable<any>{
  return this.http.delete(`${this.authUrl1}+${'companies'}/${'delete'}/${model}`,{headers: this.headers});
}
  
getAllCompanies() {
  return this.http.get<CompanydetailsModule[]>(this.authUrl1 + 'companies',{headers: this.headers,responseType:'json'});
}

getStocks(model : any) {
  return this.http.post(this.authUrl1 + 'sp/company_code/se_name' , model,{headers: this.headers,responseType:'json'});
}

getStocksBy(model : any) {
  return this.http.post<StockdetailsModule[]>(this.authUrl1 + 'sp/company_code/se_name' , model,{headers: this.headers,responseType:'json'});
}


getStocksByCodeAndName(model : any) {
  return this.http.post(this.authUrl1 + 'sp/company_code/se_name/duration',model,{headers: this.headers,responseType:'json'});
}

updateStocks(model: any) {
  return this.http.put(this.authUrl1 + 'sp/update', model,{headers: this.headers,responseType:'json'}); 
}

deleteStocks(model : any) :Observable<any>{
  return this.http.delete(`${this.authUrl1}+${'sp'}/${'delete'}`,model);
}

getAllStocks() {
  return this.http.get<StockdetailsModule[]>(this.authUrl1 + 'sp',{headers: this.headers,responseType:'json'});
}

getStockExchange() {
  return this.http.post<SectorexchangeModule[]>(this.authUrl2 + 'se',{headers: this.headers,responseType:'json'});
}

updateStockExchange(model: any) {
  return this.http.put(this.authUrl2 + 'se/update', model,{headers: this.headers,responseType:'json'}); 
}

deleteStockExchange(model : any) :Observable<any>{
  return this.http.delete(`${this.authUrl2}+${'se'}/${'delete'}/${model}`,{headers: this.headers,responseType:'json'});
}

getAllStockExchange() {
  return this.http.get<SectorexchangeModule[]>(this.authUrl2 + 'se',{headers: this.headers,responseType:'json'});
}
}
