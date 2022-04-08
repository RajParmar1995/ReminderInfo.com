import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import * as Chartist from 'chartist';
import { CommonService } from '../../Portal/Service/common.service';

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

export interface Element {
  name: string;
  pic: string;
  weight: number;
  designation: string;
}

const ELEMENT_DATA: Element[] = [
  {
    pic: 'assets/images/users/1.jpg',
    name: 'Nirav joshi',
    weight: 1.0079,
    designation: 'H'
  },
  {
    pic: 'assets/images/users/2.jpg',
    name: 'Sunil joshi',
    weight: 4.0026,
    designation: 'He'
  },
  {
    pic: 'assets/images/users/3.jpg',
    name: 'Vishal Bhatt',
    weight: 6.941,
    designation: 'Li'
  },
  {
    pic: 'assets/images/users/4.jpg',
    name: 'Beryllium Lon',
    weight: 9.0122,
    designation: 'Be'
  },
  {
    pic: 'assets/images/users/5.jpg',
    name: 'Boron son',
    weight: 10.811,
    designation: 'B'
  },
  {
    pic: 'assets/images/users/6.jpg',
    name: 'Carbon hryt',
    weight: 12.0107,
    designation: 'C'
  },
  {
    pic: 'assets/images/users/7.jpg',
    name: 'Nitro oxur',
    weight: 14.0067,
    designation: 'N'
  }
];

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component {

  // User Profile
  lists: any = {};
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  // Barchart
  barChart1: Chart = {
    type: 'Bar',
    data: data['Bar'],
    options: {
      seriesBarDistance: 15,
      high: 12,
      height: 325,
      axisX: {
        showGrid: false,
        offset: 20
      },
      axisY: {
        showGrid: true,
        offset: 40
      }
    },
    responsiveOptions: [
      [
        'screen and (min-width: 640px)',
        {
          axisX: {
            labelInterpolationFnc: function (
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

  GetUserList() {
    if (localStorage.getItem("UserType") == "Super Admin" || localStorage.getItem("UserType") == "Manager") {
      this.common.GetMethod("GetUserInfo").then((res: any) => {
        this.lists.Userlist = res.Data;
        this.lists.Userlist.forEach(element => {
          element.userinfo = element.name + "-" + element.Branchname;
        });
        this.lists.Userlist = new MatTableDataSource(this.lists.Userlist);
      });
    } else {
      this.common.GetMethod("GetUserInfo?userid=" + localStorage.getItem("UserId")).then((res: any) => {
        this.lists.Userlist = res.Data;
        this.lists.Userlist.forEach(element => {
          element.userinfo = element.name + "-" + element.Branchname;
        });
        this.lists.Userlist = new MatTableDataSource(this.lists.Userlist);
      });
    }
  }


  GetAdminList() {
    this.common.PostMethod("GetfilterData", { file: "users", name: "usertype", value: "Admin" }).then((res: any) => {
      this.lists.Adminlist = new MatTableDataSource(res.Data);
      this.lists.Adminlist.paginator = this.paginator;
      this.lists.Adminlist.sort = this.sort;
    });
  }

  GetMyCredit() {
    this.common.GetMethod("MyCredit?Id=" + window.localStorage.getItem("UserId")).then((res: any) => {
      this.lists.MyCredit = res.Data.presentamount;
      window.localStorage.setItem("MyCredit", res.Data.presentamount);
    });
    if (localStorage.getItem("UserType") != "Super Admin") {
      this.common.GetMethod("Dashboard?userid=" + localStorage.getItem("UserId")).then((res: any) => {
        this.lists.Dashboard = res.Data;
      });
    } if (localStorage.getItem("UserType") == "Super Admin") {
      this.common.GetMethod("Dashboard").then((res: any) => {
        this.lists.Dashboard = res.Data;
      });
    }
  }

  // Doughnut
  public doughnutChartLabels: string[] = ['Desktop', 'Mobile', 'Tablet'];
  public doughnutChartOptions: any = {
    responsive: false
  };

  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';
  public doughnutChartLegend = false;

  // This is for the comments
  mycomments: Object[] = [
    {
      name: 'James Anderson',
      content:
        'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      profile: 'assets/images/users/1.jpg',
      status: 'Pending',
      class: 'info',
      date: 'April 14, 2016'
    },
    {
      name: 'Michael Jorden',
      content:
        'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      profile: 'assets/images/users/2.jpg',
      status: 'Approved',
      class: 'light-success',
      date: 'April 14, 2016'
    },
    {
      name: 'James Anderson',
      content:
        'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      profile: 'assets/images/users/3.jpg',
      status: 'Pending',
      class: 'danger',
      date: 'April 14, 2016'
    },
    {
      name: 'Johnathan Doeting',
      content:
        'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      profile: 'assets/images/users/1.jpg',
      status: 'Pending',
      class: 'info',
      date: 'April 14, 2016'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/3.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/6.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/7.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/8.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/6.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];
  // bar chart
  public barChartData: Array<any> = [
    { data: [1.1, 1.4, 1.1, 0.9, 1.9, 1, 0.3, 1.1, 1.4, 1.1, 0.9, 1.9, 1, 0.3, 1.1], label: 'Cost' }
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
    '12',
    '13',
    '14',
    '15'
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

  // This is for the table responsive
  constructor(breakpointObserver: BreakpointObserver, public common: CommonService) {
    this.lists.Dashboard = {};
    this.lists.UserType = localStorage.getItem("UserType");
    this.lists.displayedColumns = ["name", "Branchname", "mobile", "usertype", "PresentAmount", "lastlogin"];
    this.lists.displayedColumnsAdmin = ["name", "mobile", "usertype", "lastlogin"];
    // this.lists.Adminlist.paginator = this.paginator;
    // this.lists.Adminlist.sort = this.sort;
    this.GetMyCredit();
    this.GetUserList();
    this.GetAdminList();

    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['pic', 'name', 'weight', 'designation'] :
        ['pic', 'name', 'weight', 'designation'];
    });
  }
  ngAfterViewInit(): any {
    this.GetMyCredit();
  }
  // tslint:disable-next-line:member-ordering
  displayedColumns = ['pic', 'name', 'weight', 'designation'];
  // tslint:disable-next-line:member-ordering
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
}
