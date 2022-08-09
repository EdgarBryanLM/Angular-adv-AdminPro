import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  async ngOnInit(){
  await  this.getUsuarios().then((usuario:any)=>{
    console.log(usuario);
    
    });
    console.log('fin');
    
 /*    const promesa=new Promise((resolve,reject)=>{
    
      if(true){
        resolve('hola mundo');
      }else{
        reject('Salio mal');
      }
      

    });

   await promesa.then((mensaje:any)=>{
        console.log(mensaje);
        
    }).catch(error=>{console.log('error');
  });

    console.log('fin');
     */

  }


  getUsuarios(){
    const promesa=new Promise( resolve=>{
      fetch('https://reqres.in/api/users').then((resp:any)=>{
      resp.json().then((body:any)=>{resolve(body.data);
      });
     });
    });

    return promesa;
  }

}
