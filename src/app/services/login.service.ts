import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap, map, Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login.interfaces';
import { Usuario } from '../models/usuario.model';

declare const google:any;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url=environment.url;

  constructor(private http:HttpClient,private router:Router) { }

  usuario!:Usuario;
  login(data:Login){
    console.log(data);
    
    return this.http.post(`${this.url}auth`,data).pipe(
      tap((resp:any)=>{
          console.log(resp);
          
      }),
      tap((res:any)=>{
        console.log(res);
        
        localStorage.setItem('tokenC',res.token);
        }),
        
      );
  };

  loginGoogle(token:string){
  
  return this.http.post(`${this.url}auth/google`,{token}).pipe(
      tap((resp:any)=>{
        console.log(resp);
        
        localStorage.setItem('tokenC',resp.token);
      })
    )
  }


  validarToken():Observable<boolean>{
  const token=localStorage.getItem('tokenC') ||'';

    return this.http.get(`${this.url}auth/renew`,{
      headers:{
      'x-token':token
      }
    }).pipe(
        map((resp:any)=>{
          console.log(resp);
          console.log('hi');
          
          localStorage.setItem('tokenC',resp.token);
          console.log(resp);
          //usuarioDB
          this.usuario= new Usuario(resp.usuarioDB.role,resp.usuarioDB.google,resp.usuarioDB.nombre,
                                    '123456',resp.usuarioDB.email,resp.usuarioDB.img,resp.usuarioDB.id);
          this.usuario.imprimir();
          return true
        }),
        catchError(err=>of(false))
      )
    }

    logout(){
    localStorage.removeItem('tokenC');

    google.accounts.id.revoke('edgar360456@gmail.com',()=>{
      this.router.navigateByUrl('/login');

    });
    }
}
