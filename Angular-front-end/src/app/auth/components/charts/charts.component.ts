import { StockdetailsModule } from './../../../stockdetails/stockdetails.module';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Timestamp } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as FusionCharts from 'fusioncharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  value1: string = '';
  value2: string = '';
  //event handler for the select element's change event


  //value1 = (<HTMLSelectElement>document.getElementById('inputcs1')).value;
  // value2 = (<HTMLSelectElement>document.getElementById('inputse1')).value;
  stockdetails1 : StockdetailsModule[];
  stockdetails2 : StockdetailsModule[];

  data2 : any;
   param1 : Text;

   request1 :any;
   from : Timestamp<Date>;
   to : Timestamp<Date>;
   data1 : any;

  val1 : string= '';
  val2 : string = ''
  param2 : Text;
  request2 : any;

  str : string[] = [];
  check : number = 1;

  dataSource: object;
  dataSources: object;
  max1;max2;min1;min2;avg1;avg2;growth1;growth2;
  data11 = [
     { id:1, companyCode:"1", seName:'1', currentPrice:129, date: "01-01-2020" },
     { id:1, companyCode:"1", seName:'1', currentPrice:12, date: "02-01-2020" },
     { id:1, companyCode:"1", seName:'1', currentPrice:125, date: "03-01-2020" },
     { id:1, companyCode:"1", seName:'1', currentPrice:121, date: "04-01-2020" },
     { id:1, companyCode:"1", seName:'1', currentPrice:120, date: "05-01-2020" },
     { id:1, companyCode:"1", seName:'1', currentPrice:145, date: "06-01-2020" },
     { id:1, companyCode:"1", seName:'1', currentPrice:100, date: "07-01-2020" },
   ];
  // data1 = [
  //   { "id":1, "companyCode":"1", "seName":'1', "currentPrice":129, "Time": "01-01-2020" },
  //   { "id":1, "companyCode":"1", "seName":'1', "currentPrice":12, "Time": "02-01-2020" },
  //   { "id":1, "companyCode":"1", "seName":'1', "currentPrice":125, "Time": "03-01-2020" },
  //   { "id":1, "companyCode":"1", "seName":'1', "currentPrice":121, "Time": "04-01-2020" },
  //   { "id":1, "companyCode":"1", "seName":'1', "currentPrice":120, "Time": "05-01-2020" },
  //   { "id":1, "companyCode":"1", "seName":'1', "currentPrice":145, "Time": "06-01-2020" },
  //   { "id":1, "companyCode":"1", "seName":'1', "currentPrice":100, "Time": "07-01-2020" },
  // ];
  // data2 = [
  //   { "id":1, "companyCode":"1", "seName":'1', "currentPrice":129, "Time": "01-01-2020" },
  //   { "id":1, "companyCode":"1", "seName":'1', "currentPrice":120, "Time": "02-01-2020" },
  //   { "id":1, "companyCode":"1", "seName":'1', "currentPrice":25, "Time": "03-01-2020" },
  //   { "id":1, "companyCode":"1", "seName":'1', "currentPrice":121, "Time": "04-01-2020" },
  //   { "id":1, "companyCode":"1", "seName":'1', "currentPrice":220, "Time": "05-01-2020" },
  //   { "id":1, "companyCode":"1", "seName":'1', "currentPrice":145, "Time": "06-01-2020" },
  //   { "id":1, "companyCode":"1", "seName":'1', "currentPrice":100, "Time": "07-01-2020" },
  // ];
  data6 = [
    [ 1, "1", '1',129, "01-01-2020" ],
    [ 1, "1", '1', 12,  "02-01-2020" ],
    [ 1, "1", '1', 125, "03-01-2020" ],
    [ 1, "1", '1', 21,  "04-01-2020" ],
    [ 1, "1", '1', 120,  "05-01-2020"],
    [ 1, "1", '1', 145,  "06-01-2020" ],
    [ 1, "1", '1', 100,  "07-01-2020" ],
  ];
  data7 = [
    [ 1, "2", '1',124, "01-01-2021" ],
    [ 1, "2", '1', 120,  "02-01-2021" ],
    [ 1, "2", '1', 125, "03-01-2021" ],
    [ 1, "2", '1', 214,  "04-01-2021" ],
    [ 1, "2", '1', 12,  "05-01-2021"],
    [ 1, "2", '1', 135,  "06-01-2021" ],
    [ 1, "2", '1', 10,  "07-01-2021" ],
  ];
  data4:any
  schema2 = [
    {
      "name":"id",
      "type":"number"

    },
    {
      "name": "companyCode",
      "type": "string"
    },
    {
      "name": "seName",
      "type": "string"
    },
    {
      "name": "currentPrice",
      "type": "number"
    },
    {
      "name": "date",
      "type": "date",
      "format": "%Y-%m-%d"
    },
    {
      "name": "CS",
      "type": "string"
    }
  ];
  chart="line";

  config={
    "enableIndex": true, //default is true
    "indexBy": "Time", //Column Name on which the indexing is applied
  };
  
    
  constructor(private authService : AuthService) {
    
   }
   /*fetchData() {
    var jsonify = res => res.json();
    var dataFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json'
    ).then(jsonify);
    var schemaFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
    ).then(jsonify);
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      // First we are creating a DataStore
      const fusionDataStore = new FusionCharts.DataStore();
      // After that we are creating a DataTable by passing our data and schema as arguments
      const fusionTable = fusionDataStore.createDataTable(data, schema);
      // Afet that we simply mutated our timeseries datasource by attaching the above
      // DataTable into its data property.
      // this.dataSource.data = fusionTable;
      console.log('data: ',data);
      console.log('schema:',schema);
      console.log(fusionTable);
    });
  }*/
  
  single:Boolean=true;
  diff:Boolean=false;
  togglediff(){
    this.diff=!this.diff;
    this.plotchart();
  }
  togglesingle(){
    this.single=!this.single;
    // this.plotchart();
  }
  plot:Boolean=false;
  bar:Boolean=false;
  charttype(){
    this.bar=!this.bar;
    if(this.bar) this.chart="column";
    else this.chart="line";
    this.plotchart();
  }
  toggleplot(){
    let data5 : any;
    data5='';
    data5={
      "id" : 1,
      "companyCode" : "q",
      "seName" : "NSE",
      "currentPrice" : 1000,
     "date" : new Date()
    }
    this.data1.push(data5)

    // if(this.value1==='Sector') {
    //   this.check = 0
    // }

    this.plot=!this.plot;
    if(this.plot==false){
      this.diff=false;
      this.single=true;
      this.bar=false;
    }

    //if(this.plot) ;//upload data here from microservices;
    // if(this.data6[0].length<6) for(var i=0;i<this.data6.length;i++) this.data6[i].push("Company/Sector 1");
    // if(this.single==false && this.data7[0].length<6)
    // for(var i=0;i<this.data7.length;i++) this.data7[i].push("Company/Sector 2");
    if(this.plot){
      let k :number=0;
      this.str = ["companyCode","sector"];
          this.request1 = {
             "companyCode" : this.param1,
             "seName" : this.value2
           }
          // let dat = this.authService.getStocksBy(this.request1);
          // dat.subscribe(data=>this.stockdetails1=data);
          //  this.stockdetails1.forEach(obj => {
             
          //  })  

        console.log(this.data1);
        for(var i=0;i<this.data1.length;i++){
            this.data1[i]["CS"]="Company/Sector 1";
           //  let d = FusionCharts.Utils.formatDate(this.data1[i].Time, '%d-%m-%Y');
           //  this.data1[i].Time = d.toString();
           this.data1[i].date = this.data1[i].date.substring(0,10);
   
            // console.log(this.data1[i].Time);
         }
         let t = this.getlimits(this.data1);
         this.max1=t[0];
         this.min1=t[1];
         this.avg1=t[2];
         this.growth1=t[3];
        // for(var i=0;i<this.data1.length;i++) this.data1[i]["CS"]="Company/Sector 1";
        // for(var i=0;i<this.data2.length;i++) this.data2[i]["CS"]="Company/Sector 2";
        if(this.single==false){
            this.request2 = {
                "companyCode" : this.param2,
                "seName" : this.val2
            }
            let dat1 = this.authService.getStocksBy(this.request2);
            dat1.subscribe(data=>this.stockdetails2=data);
            this.data2=this.stockdetails2;
            for(var i=0;i<this.data2.length;i++){
                this.data2[i]["CS"]="Company/Sector 2";
                this.data2[i].Time = this.data2[i].Time.substring(0,10);
            }
            let t = this.getlimits(this.data2);
            this.max2=t[0];
            this.min2=t[1];
            this.avg2=t[2];
            this.growth2=t[3];
        }
        this.plotchart();
    }
    
  }
  plotchart(){
    if(this.single==false && this.diff==false) this.data4=this.data1.concat(this.data2);
    else this.data4=this.data1;
    const fusionDataStore = new FusionCharts.DataStore();
    //   // After that we are creating a DataTable by passing our data and schema as arguments
    const fusionTable = fusionDataStore.createDataTable(this.data4, this.schema2);
    const ft = fusionDataStore.createDataTable(this.data2,this.schema2);
    this.dataSource = {
      data: fusionTable,
      // chart: {
      //   "theme": "fusion",
      //   "caption": "Total footfall in Bakersfield Central",
      //   "subCaption": "Last week",
      //   "xAxisName": "Day",
      //   "yAxisName": "No. of Visitors",
      //   "lineThickness": "2"
      // },
      
      series: 'CS',
      // caption: {
      //   text: 'Web visits & downloads'
      // },
      // subcaption: {
      //   text: 'since 2015'
      // },
      yAxis: [
        {
          plot: [
            {
              value: 'currentPrice',
              type: this.chart
            }
          ]
        }
      ],
      //  use it to clip date.
      // xaxis: {
      //   clip: [
      //     {
      //       from: "2019 Feb 05",
      //       to: "2019 Feb 05",
      //       format: "%Y %b %d"
      //     }
      //   ]
      // }
      };
      this.dataSources = {
        data: ft,
        // chart: {
        //   "theme": "fusion",
        //   "caption": "Total footfall in Bakersfield Central",
        //   "subCaption": "Last week",
        //   "xAxisName": "Day",
        //   "yAxisName": "No. of Visitors",
        //   "lineThickness": "2"
        // },
        
        series: 'CS',
        // caption: {
        //   text: 'Web visits & downloads'
        // },
        // subcaption: {
        //   text: 'since 2015'
        // },
        yAxis: [
          {
            plot: [
              {
                value: 'currentPrice',
                type: this.chart
              }
            ]
          }
        ],
        // copy same clipping code here as of line 185
        };
    // this.fetchData();
  }
  getlimits(data){
    let max=data[0].currentPrice;
    let min=data[0].currentPrice;
    let count = data.length;
    let sum = 0;
    for(let l of data){
      max = Math.max(max,l.currentPrice);
      min = Math.min(max,l.currentPrice);
      sum = sum + l.currentPrice;
    }
    let growth = (data[count-1].currentPrice - data[0].currentPrice)/data[0].currentPrice;
    return [max,min,sum/count,growth];

  }
  ngOnInit(): void {
  }

}