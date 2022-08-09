import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcountsetingsComponent } from './acountsetings/acountsetings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
{
  path:'dashboard',            component:PagesComponent,
  children:[
   {path:'', component:DashboardComponent,data:{titulo:'dashboard'}},
   {path:'progress',  component:ProgressComponent,data:{titulo:'progress'}},
   {path:'grafica1',  component:GraficaComponent,data:{titulo:'grafica'}},
   {path:'acount',  component:AcountsetingsComponent,data:{titulo:'acount'}},
   {path:'promesas',  component:PromesasComponent,data:{titulo:'promesas'}},
   {path:'rxjs',  component:RxjsComponent,data:{titulo:'Rxjs'}},
   {path:'',          redirectTo:'dashboard', pathMatch:'full'},
 ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
