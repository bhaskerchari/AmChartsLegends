import { Component, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('chartContainer') chartContainer: ElementRef;
  title = 'app';

  data = [
    {
      'PID': 45,
      'e57a74da95d': 14208122.51,
      'ihu0lkbc4lg': 38930330,
      'PERIODDT': 'Sep 2017',
      'BEFORE WEEKS': 0
    },
    {
      'PID': 44,
      'e57a74da95d': 13833101.16,
      'ihu0lkbc4lg': 38259420,
      'PERIODDT': 'Aug 2017',
      'BEFORE WEEKS': 1
    },
    {
      'PID': 43,
      'e57a74da95d': 13404076.01,
      'ihu0lkbc4lg': 37338480,
      'PERIODDT': 'Jul 2017',
      'BEFORE WEEKS': 2
    },
    {
      'PID': 42,
      'e57a74da95d': 13039066.06,
      'ihu0lkbc4lg': 36552800,
      'PERIODDT': 'Jun 2017',
      'BEFORE WEEKS': 3
    },
    {
      'PID': 41,
      'e57a74da95d': 12736336.36,
      'ihu0lkbc4lg': 35821880,
      'PERIODDT': 'May 2017',
      'BEFORE WEEKS': 4
    },
    {
      'PID': 40,
      'e57a74da95d': 12534113.01,
      'ihu0lkbc4lg': 35316770,
      'PERIODDT': 'Apr 2017',
      'BEFORE WEEKS': 5
    },
    {
      'PID': 39,
      'e57a74da95d': 12354561.22,
      'ihu0lkbc4lg': 34775970,
      'PERIODDT': 'Mar 2017',
      'BEFORE WEEKS': 6
    },
    {
      'PID': 38,
      'e57a74da95d': 12215719.31,
      'ihu0lkbc4lg': 34399920,
      'PERIODDT': 'Feb 2017',
      'BEFORE WEEKS': 7
    },
    {
      'PID': 29,
      'e57a74da95d': 12125495.78,
      'ihu0lkbc4lg': 35748080,
      'PERIODDT': 'May 2016',
      'BEFORE WEEKS': 16
    },
    {
      'PID': 37,
      'e57a74da95d': 12119539.21,
      'ihu0lkbc4lg': 34124650,
      'PERIODDT': 'Jan 2017',
      'BEFORE WEEKS': 8
    },
    {
      'PID': 30,
      'e57a74da95d': 12107155.03,
      'ihu0lkbc4lg': 35395870,
      'PERIODDT': 'Jun 2016',
      'BEFORE WEEKS': 15
    },
    {
      'PID': 28,
      'e57a74da95d': 12061179.88,
      'ihu0lkbc4lg': 35886710,
      'PERIODDT': 'Apr 2016',
      'BEFORE WEEKS': 17
    },
    {
      'PID': 36,
      'e57a74da95d': 12052479.56,
      'ihu0lkbc4lg': 33903050,
      'PERIODDT': 'Dec 2016',
      'BEFORE WEEKS': 9
    },
    {
      'PID': 35,
      'e57a74da95d': 12025557.73,
      'ihu0lkbc4lg': 33843840,
      'PERIODDT': 'Nov 2016',
      'BEFORE WEEKS': 10
    },
    {
      'PID': 31,
      'e57a74da95d': 12013223.73,
      'ihu0lkbc4lg': 34835660,
      'PERIODDT': 'Jul 2016',
      'BEFORE WEEKS': 14
    },
    {
      'PID': 27,
      'e57a74da95d': 12005250.64,
      'ihu0lkbc4lg': 36087140,
      'PERIODDT': 'Mar 2016',
      'BEFORE WEEKS': 18
    },
    {
      'PID': 34,
      'e57a74da95d': 11983938.08,
      'ihu0lkbc4lg': 33824460,
      'PERIODDT': 'Oct 2016',
      'BEFORE WEEKS': 11
    },
    {
      'PID': 33,
      'e57a74da95d': 11981961.1,
      'ihu0lkbc4lg': 34170920,
      'PERIODDT': 'Sep 2016',
      'BEFORE WEEKS': 12
    },
    {
      'PID': 32,
      'e57a74da95d': 11954134.53,
      'ihu0lkbc4lg': 34364090,
      'PERIODDT': 'Aug 2016',
      'BEFORE WEEKS': 13
    },
    {
      'PID': 26,
      'e57a74da95d': 11897574.47,
      'ihu0lkbc4lg': 36131880,
      'PERIODDT': 'Feb 2016',
      'BEFORE WEEKS': 19
    },
    {
      'PID': 25,
      'e57a74da95d': 11831903.82,
      'ihu0lkbc4lg': 36273730,
      'PERIODDT': 'Jan 2016',
      'BEFORE WEEKS': 20
    },
    {
      'PID': 24,
      'e57a74da95d': 11709179.63,
      'ihu0lkbc4lg': 36242930,
      'PERIODDT': 'Dec 2015',
      'BEFORE WEEKS': 21
    },
    {
      'PID': 23,
      'e57a74da95d': 10582659.46,
      'ihu0lkbc4lg': 33067160,
      'PERIODDT': 'Nov 2015',
      'BEFORE WEEKS': 22
    },
    {
      'PID': 22,
      'e57a74da95d': 9533660.01,
      'ihu0lkbc4lg': 30013920,
      'PERIODDT': 'Oct 2015',
      'BEFORE WEEKS': 23
    },
    {
      'PID': 21,
      'e57a74da95d': 8452370.09,
      'ihu0lkbc4lg': 26588170,
      'PERIODDT': 'Sep 2015',
      'BEFORE WEEKS': 24
    },
    {
      'PID': 20,
      'e57a74da95d': 7577215.16,
      'ihu0lkbc4lg': 23804500,
      'PERIODDT': 'Aug 2015',
      'BEFORE WEEKS': 25
    },
    {
      'PID': 19,
      'e57a74da95d': 6682656.21,
      'ihu0lkbc4lg': 20993440,
      'PERIODDT': 'Jul 2015',
      'BEFORE WEEKS': 26
    },
    {
      'PID': 18,
      'e57a74da95d': 5805877.61,
      'ihu0lkbc4lg': 18225240,
      'PERIODDT': 'Jun 2015',
      'BEFORE WEEKS': 27
    },
    {
      'PID': 17,
      'e57a74da95d': 4844599.36,
      'ihu0lkbc4lg': 15228410,
      'PERIODDT': 'May 2015',
      'BEFORE WEEKS': 28
    },
    {
      'PID': 16,
      'e57a74da95d': 3906421.11,
      'ihu0lkbc4lg': 12281730,
      'PERIODDT': 'Apr 2015',
      'BEFORE WEEKS': 29
    },
    {
      'PID': 15,
      'e57a74da95d': 2910449.61,
      'ihu0lkbc4lg': 9163630,
      'PERIODDT': 'Mar 2015',
      'BEFORE WEEKS': 30
    },
    {
      'PID': 14,
      'e57a74da95d': 1912008.36,
      'ihu0lkbc4lg': 6019860,
      'PERIODDT': 'Feb 2015',
      'BEFORE WEEKS': 31
    },
    {
      'PID': 13,
      'e57a74da95d': 983092.66,
      'ihu0lkbc4lg': 3090680,
      'PERIODDT': 'Jan 2015',
      'BEFORE WEEKS': 32
    }
  ];

  columns = [{
    name: 'ihu0lkbc4lg',
    desc: 'Dollars'
  }, {
    name: 'e57a74da95d',
    desc: 'Units'
  }];

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.renderChart();
    });
  }

  renderChart() {
    const legendContainer = am4core.create(this.chartContainer.nativeElement, am4core.Container);

    // Add legend
    const legend = new am4charts.Legend();
    legend.data = this.data;
    legend.parent = legendContainer;
    legend.dataFields.name = 'PERIODDT';
    legend.labels.template.text = '{PERIODDT}';
    // legend.labels.template.adapter.add('hidden', (scale, target) => {
    //   debugger;
    //   if (target.dataItem) {
    //     target.text = target.dataItem.dataContext['PERIODDT'];
    //     return scale;
    //   }
    //   return scale;
    // });
  
  }
}
