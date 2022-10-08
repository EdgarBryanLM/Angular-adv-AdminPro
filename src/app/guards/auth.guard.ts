import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private SrvLogin: LoginService,private router:Router){
  
  
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    return this.SrvLogin.validarToken().pipe(
          tap(isCorrect=>{
            console.log(isCorrect);
            
            if (!isCorrect) {
              this.router.navigateByUrl('/login');
            }
          })
        );
  }
  
}
