import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

 @Input() progreso:number=50;
 @Input() btnClass:string='btn btn-primary';

 @Output() ValorSalida:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    
  }

  onChange(event:any){

    if(event>=100){
    this.progreso=100;
    }
    if(event<=0){
      this.progreso=0;
    }
    
    
    this.ValorSalida.emit( this.progreso);
  
  }


  
  
    cambiar(valor:number){
  
      if(this.progreso>=100 && valor >=0){
        this.ValorSalida.emit(100);
      return this.progreso=100;
      }
  
      if(this.progreso<=0 && valor <0){
        this.ValorSalida.emit(0);
        return this.progreso=0;
        }
    this.progreso=this.progreso+valor;
    this.ValorSalida.emit(this.progreso);
    return;
    }
}
