import { Component, ElementRef, OnInit } from '@angular/core';
import { IData } from '../data/data';
import { DataService } from '../data/data.service';
//import { ChartConfigComponent } from './chart.config.component';

declare var $: any;
declare var AmCharts: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  private chart: any;
  private graph: any;
  private config: any;
  private _config: any;
   _dataProvider: IData[];

  data: IData[];
 // dataProvider: string = "";
  errorMessage: string;
  chartConfig: string;
  devices: any;

  constructor(private el: ElementRef,
    private _dataService: DataService) {

     }

  ngOnInit() {

    this._dataService.getData()
       .subscribe(data => { this.data = data; this.devices = saveData2(this.data); },
                 error => this.errorMessage = <any>error
                 );

    function saveData2 (data: any) {

        for (let d of data) {
            console.log(d.DeviceName);
        }
    }

    this._config = {
    "type": "serial",
    "theme": "light",
    "dataLoader": {
        "url": "../api/data/jsonExp.json",
        "format": "json"
    },
    "valueAxes": [
        {
            "maximum": 80000,
            "minimum": 0,
            "axisAlpha": 0,
            "dashLength": 4,
            "position": "left"
        }
    ],
    "startDuration": 1,
    "graphs": [
        {
            "balloonText": "<span style=\"font-size:13px;\">[[category]]: <b>[[value]]</b></span>",
            "bulletOffset": 10,
            "bulletSize": 52,
            "colorField": "color",
            "cornerRadiusTop": 8,
            "customBulletField": "bullet",
            "fillAlphas": 0.8,
            "lineAlpha": 0,
            "type": "column",
            "valueField": "points"
        }
    ],
    "marginTop": 0,
    "marginRight": 0,
    "marginLeft": 0,
    "marginBottom": 0,
    "autoMargins": false,
    "categoryField": "name",
    "categoryAxis": {
        "axisAlpha": 0,
        "gridAlpha": 0,
        "inside": true,
        "tickLength": 0
    },
    "export": {
        "enabled": true
    }
};

    let chartdiv = $(this.el.nativeElement).find("#chart-div");

    if (chartdiv) {
      this.chart = AmCharts.makeChart('chart-div', this._config, 1);
    }
  }
}

