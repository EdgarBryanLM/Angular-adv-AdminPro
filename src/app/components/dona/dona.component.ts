import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {
  @Input() titulo :string  ='sin titulo';
  @Input() labels :any[]=[ 'Enero', 'Febrero', 'Marzo' ];
  @Input() valores:any[]=[ 350, 450, 100 ];
  doughnutChartData!:any;
  doughnutChartType!:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.titulo);
    console.log(this.labels);
    console.log(this.valores);
     this.doughnutChartData = {
      labels: this.labels,
      datasets: [
        { data: this.valores},
      ]
    };
     this.doughnutChartType = 'doughnut';
    
    
  }




}
