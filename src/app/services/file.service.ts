import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  url=environment.url;

  constructor(private http:HttpClient,private router:Router) { }


  async actualizarFoto(archivo:File,tipo:'usuarios'|'medicos'|'hospitales',id:string){

    try {
    const url=`${this.url}upload/${tipo}/${id}`;      

    const fromData=new FormData();
    fromData.append('imagen',archivo);

    const resp= await fetch(url,{
    method:'PUT',
    headers:{
    'x-token':localStorage.getItem('tokenC')||''
    },
    body:fromData
    });

  

    const data=await resp.json()
    console.log(data);
    return  data.nombreArchivo;
    } catch (error) {
      console.log(error);
      
      return false;
    }
  
  }
}
