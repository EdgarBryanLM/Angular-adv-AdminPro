import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.css']
})
export class BreadcrumsComponent implements OnInit {

  titulo:string='';

  constructor(private router:Router) {
    this.router.events.pipe(
        filter( event=> event instanceof ActivationEnd),
        filter( (event:any)=> event.snapshot.firstChild===null),
        map((event:any)=> event.snapshot.data)

      
      ).subscribe((res)=>{
        console.log('hi');
        console.log(res);
        
        console.log(this.titulo);
        
        
      this.titulo=res.titulo;
      document.title=res.titulo;
      
      }); }

  ngOnInit(){


  }

}
