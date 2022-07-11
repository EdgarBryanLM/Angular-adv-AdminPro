import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  
  progreso1:number=40;
  progreso2:number=55;


  constructor() { }

  ngOnInit(): void {
  }


  get Procentaje1(){
    return this.progreso1+'%';
  }

  get Procentaje2(){
    return this.progreso2+'%';
  }






}
