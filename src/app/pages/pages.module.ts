import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';

import { PagesComponent } from './pages/pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    ProgressComponent,
    GraficaComponent,
    DashboardComponent,
    PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    ProgressComponent,
    GraficaComponent,
    DashboardComponent,
    PagesComponent]
})
export class PagesModule { }
