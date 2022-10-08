import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Registro } from '../interfaces/registro.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url=environment.url;

  constructor(private http:HttpClient) { }


  crearUsuario(formData:Registro){
  
  console.log(formData);

  return this.http.post(`${this.url}usuarios`,formData).pipe(
    tap((res:any)=>{
      console.log(res);
      
      localStorage.setItem('tokenC',res.token);
      }),
      
    
    );
  }


  actualizarUsuario(data:any,id:string,role:string){
  const token=localStorage.getItem('tokenC')!;
  console.log(`${this.url}usuarios`);
  data={
  ...data,
  role
  }

  console.log(data);
  

  return this.http.put(`${this.url}usuarios/`+id,data,{
    headers:{
      'x-token':token
      }
  })
  
  }
}
