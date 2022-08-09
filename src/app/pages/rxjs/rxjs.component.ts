import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit,OnDestroy {


  public intervaS!:Subscription;

  constructor() { }
  ngOnDestroy(): void {
    this.intervaS.unsubscribe();
  }

  ngOnInit(){

 this.retornaObservable().pipe(

   
    
    ).subscribe(
  resp=>{
    console.log('valor:'+resp); 
  },
  err=>{console.log(err);
  },
  ()=>{console.log('completado');
  }
  );




  this.intervaS=  this.retornaIntervalo().pipe(

    ).subscribe((res:any)=>{
  console.log(res);
  
  });
  }


  retornaIntervalo():Observable<number>{
    return interval(1000).pipe(
    
      map(res=>{
        return res+1;
      }),
      filter(res=>{
          return res%2===0
      })
      );
  
  
  
  }

  
  retornaObservable():Observable<number>{
    let i=0;
    const obs= new Observable<number>(
      
    observer=>{
     
    setInterval(()=>{
      i++;
       observer.next(i);

       if(i===5){
      observer.complete();
      }
      if(i===2){
        observer.error('eror');
        }
        
    },500)
    });

    return obs;
  
  }

}
