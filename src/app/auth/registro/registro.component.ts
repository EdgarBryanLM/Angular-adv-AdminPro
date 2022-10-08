import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public formpost=false;

  public registro=this.fb.group({
  
    nombre:       ['',[Validators.required,Validators.minLength(3)]],
    email:        ['',[Validators.required,Validators.email]],
    password:     ['',[Validators.required]],
    password2:    ['',[Validators.required]],
    terminos:     [false,[Validators.required]]


  },{
    Validators:this.passwordsiguales('password','password2')
  });

  constructor(private fb:FormBuilder, private srvUsuario:UsuarioService) { }

  ngOnInit(): void {
  }



  crearUsuario(){
    this.formpost=true;
    console.log(this.registro.value);

    if(this.registro.valid && !this.contrasenaNoValidas()){
    console.log('posteado');
    this.srvUsuario.crearUsuario(this.registro.value).subscribe((res:any)=>{
    console.log(res);
    
    },(err)=>{
    
      Swal.fire('Error',err.error.msg,'error')
    
    });
    
    }
  
  
  }


  campoNoValido(campo:string):boolean{
    if(this.registro.get(campo)?.invalid && this.formpost){
      return true;

    }else{
      return false;

    }
  }


  aceptaTerminos(){
  return this.registro.get('terminos')?.value && this.formpost
  
  }

  contrasenaNoValidas(){
  const pass1=this.registro.value.password;
  const pass2=this.registro.value.password2;

  if (pass1 ===pass2) {
    return false;
  }else{
    return true;
  }

  }

  passwordsiguales(password:string,password2:string){
      return (formGroup:FormGroup)=>{
        const pass1control=formGroup.get(password);
        const pass2control=formGroup.get(password2);

        if(pass1control?.value ===pass2control?.value){
          pass2control?.setErrors(null)
        }else{
          pass2control?.setErrors({noEsIgual:true})
        }

      }
  }
}
