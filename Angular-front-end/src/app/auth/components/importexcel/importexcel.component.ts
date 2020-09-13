import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-importexcel',
  templateUrl: './importexcel.component.html',
  styleUrls: ['./importexcel.component.scss']
})
export class ImportexcelComponent implements OnInit {

  selectedFile:File= null;
  chooseFileMessage = "Choose File";
  jsonResponseData: any;
  jsonRespnseMessage: any;
  jsonInsertedDetails: [];

  showMsgBoolean: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
   }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    this.jsonInsertedDetails = null;
    this.selectedFile = event.target.files[0];
    this.chooseFileMessage=this.selectedFile.name;
    console.log(event)
  }  

  downloadSample(){
    //window.open('/assets/images/sample_stock_data_check.xlsx', '_blank');
    let link = document.createElement("a");
    link.download = "sample_stock.xlsx";
    link.href = "assets/sample_stock.xlsx";
    link.click();
  }

  onUpload(){
    const fd = new FormData();
    fd.append('excel',this.selectedFile, this.selectedFile.name);
    this.http.post("http://localhost:8080/importexcel/upload", fd)
        .subscribe(res=>{
         if (res) {
           
             localStorage.setItem('currentData', JSON.stringify(res));
         }
         if(localStorage.getItem('currentData')) {
          this.jsonResponseData = JSON.parse(localStorage.getItem('currentData'));
          this.jsonRespnseMessage = this.jsonResponseData.message;
          alert(this.jsonRespnseMessage);
          this.jsonInsertedDetails = this.jsonResponseData.stockInsertedDetails;
          this.showMsgBoolean = true;
        }
       }); 
  }
}