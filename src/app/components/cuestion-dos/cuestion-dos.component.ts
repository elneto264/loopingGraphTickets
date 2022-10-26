import { Component, OnInit } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Issue, Status } from 'src/app/entities/issue.entity';
import { v4 as uuidv4 } from 'uuid';

let idRan = uuidv4();

const tasks=[
  {
  id: idRan.toString() ,
  title:"titulo1",
  description:"des1",
  storyPoints:15,
  developer:"user1",
  status:Status.ToDo
  },
  {
    id: idRan.toString() ,
    title:"titulo1",
    description:"des2",
    storyPoints:12,
    developer:"user1",
    status:Status.InProgess
  },
  {
      id: idRan.toString() ,
      title:"titulo1",
      description:"des6",
      storyPoints:13,
      developer:"user1",
      status:Status.UnderReview
  },
  {
      id: idRan.toString() ,
      title:"titulo1",
      description:"des3",
      storyPoints:12,
      developer:"user1",
      status:Status.Done

  }
]

// const toDoStatus = tasks.filter(({status})=> status == 'To Do')
const sPoint = tasks.filter(({storyPoints})=> storyPoints)

function stDo() {
  for (let s of tasks) {
    if (s.storyPoints && s.status == Status.ToDo) {
      return s.storyPoints;
    }
  }
  return;
}

function stDone() {
  for (let s of tasks) {
    if (s.storyPoints && s.status == Status.Done) {
      return s.storyPoints;
    }
  }
  return;
}
function stInP() {
  for (let s of tasks) {
    if (s.storyPoints && s.status == Status.InProgess) {
      return s.storyPoints;
    }
  }
  return;
}

function stUr() {
  for (let s of tasks) {
    if (s.storyPoints && s.status == Status.UnderReview) {
      return s.storyPoints;
    }
  }
  return;
}

@Component({
  selector: 'app-cuestion-dos',
  templateUrl: './cuestion-dos.component.html',
  styleUrls: ['./cuestion-dos.component.css']
})
export class CuestionDosComponent implements OnInit {



  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };



  public pieChartData: ChartData<'pie',any> = {


    labels: [ Status.Done , Status.ToDo, Status.UnderReview, Status.InProgess ],
    datasets: [ {
      data: [ stDone(),stDo(),stUr(),stInP() ]
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];

  constructor() { }

  ngOnInit(): void {

  }

}
