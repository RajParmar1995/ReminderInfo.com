import { Component } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
declare var require: any;

const data: any = require('./data.json');

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component {
  // Barchart
  barChart1: Chart = {
    type: 'Bar',
    data: data['Bar'],
    options: {
      seriesBarDistance: 15,
      high: 12,

      axisX: {
        showGrid: false,
        offset: 20
      },
      axisY: {
        showGrid: true,
        offset: 40
      },
      height: 360
    },

    responsiveOptions: [
      [
        'screen and (min-width: 640px)',
        {
          axisX: {
            labelInterpolationFnc: function(
              value: number,
              index: number
            ): string {
              return index % 1 === 0 ? `${value}` : null;
            }
          }
        }
      ]
    ]
  };

  // This is for the donute chart
  donuteChart1: Chart = {
    type: 'Pie',
    data: data['Pie'],
    options: {
      donut: true,
      height: 300,
      showLabel: false,
      donutWidth: 30
    }
    // events: {
    //   draw(data: any): boolean {
    //     return data;
    //   }
    // }
  };
  // This is for the line chart
  // Line chart
  lineChart1: Chart = {
    type: 'Line',
    data: data['LineWithArea'],
    options: {
      low: 0,
      height: 360,
      high: 35000,
      showArea: true,
      fullWidth: true
    }
  };

  // Timeline
  mytimelines: any[] = [
    {
      from: 'Nirav joshi',
      time: '(5 minute ago)',
      image: 'assets/images/users/1.jpg',
      attachment: 'assets/images/big/img2.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
    },
    {
      from: 'Sunil joshi',
      time: '(3 minute ago)',
      image: 'assets/images/users/2.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
      buttons: 'primary'
    },
    {
      from: 'Vishal Bhatt',
      time: '(1 minute ago)',
      image: 'assets/images/users/3.jpg',
      attachment: 'assets/images/big/img1.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
    },
    {
      from: 'Dhiren Adesara',
      time: '(1 minute ago)',
      image: 'assets/images/users/4.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
      buttons: 'warn'
    }
  ];

  // bar chart
  public barChartData: Array<any> = [
    { data: [1.1, 1.4, 1.1, 0.9, 1.9, 1, 0.3, 1.1, 1.4, 1.1, 0.9, 1.9], label: 'Cost' }
  ];
  public barChartLabels: Array<any> = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12'
  ];
  public barChartOptions: any = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.3,
        categoryPercentage: 0.7
      }],
      yAxes: [{
        display: false
      }]
    }
  };
  public barChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      hoverBackgroundColor: 'rgba(255, 255, 255, 0.5)',
      hoverBorderWidth: 2,
      hoverBorderColor: 'rgba(255, 255, 255, 0.5)'
    }
  ];
  public barChartLegend = false;
  public barChartType = 'bar';
}
