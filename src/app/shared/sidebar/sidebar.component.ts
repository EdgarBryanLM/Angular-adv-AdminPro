import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuario!:Usuario;
  MenuItems:any[]=[];
  imgUrl=''
  constructor(private side:SidebarService, private SrvUsuario:LoginService) {
    this.imgUrl=SrvUsuario.usuario.imagenUrl;
    this.usuario=SrvUsuario.usuario;
    console.log(this.imgUrl); }

  ngOnInit(): void {
    this.MenuItems=this.side.menu;
    console.log(this.MenuItems);
    
  }



}
