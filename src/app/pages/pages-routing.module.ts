import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
{
  path:'dashboard',            component:PagesComponent,
  children:[
   {path:'', component:DashboardComponent},
   {path:'progress',  component:ProgressComponent},
   {path:'grafica1',  component:GraficaComponent},
   {path:'',          redirectTo:'dashboard', pathMatch:'full'},
 ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
