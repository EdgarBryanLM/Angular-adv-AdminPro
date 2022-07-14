import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  theme=document.querySelector('#theme');

  constructor() {
    const url =localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.theme?.setAttribute('href',url);
  }
}
