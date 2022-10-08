import { Component, OnInit,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';

declare const google:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {

  @ViewChild('googleBtn') googleBtn!:ElementRef;

  public loginform=this.fb.group({
  
    email:        [localStorage.getItem('email') || '',[Validators.required,Validators.email]],
    password:     ['',[Validators.required]],
    remember:     [false]
  });

  constructor(private fb:FormBuilder,private router:Router,private SrvLogin:LoginService) { }


  ngAfterViewInit(): void {
    this.googleInit();
  }


  googleInit(){
    google.accounts.id.initialize({
      client_id: "381108476018-2joaf8k3o57kd9qgk6co3l7hquifmglq.apps.googleusercontent.com",
      callback: (response:any)=> this.handleCredentialResponse(response)
    });
    google.accounts.id.renderButton(
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );
  
  }


  handleCredentialResponse(response:any){
    console.log("Encoded JWT ID token: " + response.credential);
    this.SrvLogin.loginGoogle(response.credential).subscribe((resp:any)=>{
      console.log(resp);
      this.router.navigateByUrl('/');

    });
  }

  ngOnInit(): void {
  }

  login(){
  
    this.SrvLogin.login(this.loginform.value).subscribe((res:any)=>{
      console.log(res);
      console.log('hi');

      if(this.loginform.value.remember){
      
      localStorage.setItem('email',this.loginform.value.email);
      }else{
        localStorage.removeItem('email');

      }

      this.router.navigateByUrl('/');
      
      
    });
  
  }

}
