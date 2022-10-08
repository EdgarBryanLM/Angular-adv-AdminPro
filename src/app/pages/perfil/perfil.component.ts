import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { FileService } from 'src/app/services/file.service';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfilForm!:FormGroup;
  usuario:Usuario;

  imagen!:File;

  imagenT:any='';

  constructor(private fb:FormBuilder,private SrvLogin:LoginService,private SrvUusuario:UsuarioService
              ,private file:FileService) { 
    this.usuario=SrvLogin.usuario;
    this.perfilForm=this.fb.group({
      nombre: [this.usuario.nombre,Validators.required],
      email:  [this.usuario.email,[Validators.required,Validators.email]]
  
      });

  }

  ngOnInit(): void {

  }


  actualizarPerfil(){
    let actualizar={
      nombre:this.perfilForm.value.nombre,
      email:this.perfilForm.value.email
    
    }
  this.SrvUusuario.actualizarUsuario(actualizar,this.usuario.id,this.usuario.role).subscribe((res:any)=>{
    this.usuario.nombre=actualizar.nombre;
    this.usuario.email=actualizar.email;
    Swal.fire('Guardado','Se actualizo el usuario','success');
  },(err)=>{
  
    Swal.fire('Error',err.error.msg,'error');

  });
  
  }

  cambiarImagen(event:any){

    if (!event.target.files[0]) {
      return;
    }
    const reader=new FileReader();
    const url64=reader.readAsDataURL(event.target.files[0]);

    reader.onloadend=()=>{
    this.imagenT=reader.result;
    }


    event=event.target.files[0];
    let file:File=event;
    console.log(file);

    this.imagen=file;
    
  
  }

  subirImagen(){
  this.file.actualizarFoto(this.imagen,'usuarios',this.usuario.id).then((resp:any)=>{
    console.log(resp);
    this.usuario.img=resp;
    Swal.fire('Guardado','Se actualizo la foto del usuario','success');

  },(err)=>{
  console.log(err);
  
    Swal.fire('Error',err.error.msg,'error');

  });
  }

}
