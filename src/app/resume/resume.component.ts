import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {  NgZone } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements  AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) {}
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      const chart = am4core.create("chartdiv", am4charts.PieChart);

      chart.paddingRight = 20;

      chart.data = [{
        "skill": "JEE",
        "value": 501.9
      }, {
        "skill": "Javascript",
        "value": 301.9
      }, {
        "skill": "Typescript",
        "value": 201.1
      }, {
        "skill": "Angular",
        "value": 165.8
      }, {
        "skill": "Symfony",
        "value": 139.9
      }, {
        "skill": "Nodes.js",
        "value": 128.3
      }, {
        "skill": "C#",
        "value": 99
      }, {
        "skill": "C",
        "value": 60
      }];
      /*chart.data = data;*/
      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "value";
      pieSeries.dataFields.category = "skill";
      pieSeries.labels.template.text = "{category}";
    }); }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
