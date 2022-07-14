import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[
  {
  titulo:'Principal',
  icon:'mdi mdi-gauge',
  submenu:[
    {
      titulo: 'main', url:'/'
    },
    {
      titulo: 'progres', url:'progress'
    },
    {
      titulo: 'grafica', url:'grafica1'
    }
  ]
  }
  ];
  constructor() { }
}
