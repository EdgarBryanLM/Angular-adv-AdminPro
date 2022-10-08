import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


   imgUrl='';
   usuario:Usuario;
  constructor(private login:LoginService,
              private router:Router) {
              this.imgUrl=login.usuario.imagenUrl;
              console.log(this.imgUrl);
              this.usuario=login.usuario;

              }

  ngOnInit(): void {
  }


  logout(){
  this.login.logout();
  }
}
