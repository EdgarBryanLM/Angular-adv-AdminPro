import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acountsetings',
  templateUrl: './acountsetings.component.html',
  styleUrls: ['./acountsetings.component.css']
})
export class AcountsetingsComponent implements OnInit {
  theme=document.querySelector('#theme');
  link!:any;
  constructor() { }

  ngOnInit(): void {
    this.link=document.querySelectorAll('.selector');

    this.checkCurrentTheme();
  }

  //./assets/css/colors/default-dark.css
  cambiarColor(color:string){
   
  const url ='./assets/css/colors/'+color+'.css'
  
  this.theme?.setAttribute('href',url);

  localStorage.setItem('theme',url);

  this.checkCurrentTheme();
  
  }

  checkCurrentTheme(){
  this.link.forEach((elem:any)=>{
    elem.classList.remove('working');

    const btn=elem.getAttribute('data-theme');
    const btnUrl='./assets/css/colors/'+btn+'.css'
    const current=this.theme?.getAttribute('href');

    if(btnUrl===current){
    elem.classList.add('working');
    }

  });
  
  
  }

}
