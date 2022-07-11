import { Component, OnInit } from '@angular/core';

import { ChartData, ChartEvent, ChartType,Color } from 'chart.js';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {


  ventas:any[]=[ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  calificaciones:any[]=['primer año', 'segundo año','tercer año']


  valores1:any[]=[ 30, 78, 62 ];
  valores2:any[]=[ 4, 7, 9 ];

  constructor() { }

  ngOnInit(): void {
  }




}
