import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-charts1',
  templateUrl: './charts1.component.html',
  styleUrls: ['./charts1.component.scss']
})
export class Charts1Component implements OnInit {

  @ViewChild('lineChart') private chartRef;
    chart: any;
  constructor() { }

  ngOnInit(): void {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels:['a','b','c','d','e'], // your labels array
        datasets: [
          {
            data: [1,2,3,4,5], // your data array
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}
