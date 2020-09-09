import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent {
  private readonly pointRadius = 0;
  public readonly resultLines: ChartDataSets[] = [
    {
      data: [50, 20, 10, 88, 100, 99],
      label: 'Analüüs 1',
      pointRadius: this.pointRadius,
    },
    {
      data: [10, 40, 10, 100, 150, 60],
      label: 'Analüüs 2',
      pointRadius: this.pointRadius,
    },
    {
      data: [0, 40, 50, 100, 20, 70],
      label: 'Analüüs 3',
      pointRadius: this.pointRadius,
    },
    {
      data: [30, 40, 60, 100, 30, 80],
      label: 'Analüüs 4',
      pointRadius: this.pointRadius,
    },
    {
      data: [40, 40, 70, 100, 40, 90],
      label: 'Analüüs 5',
      pointRadius: this.pointRadius,
    },
  ];
  public readonly monthLabels = [
    'Jaanuar',
    'Veebruar',
    'Märts',
    'Aprill',
    'Mai',
    'Juuni',
  ];
  public readonly opts: ChartOptions = {
    elements: {
      line: {
        tension: 0.7,
        fill: false,
        borderWidth: 2,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 160,
            stepSize: 40,
          },
        },
      ],
    },
  };
}
