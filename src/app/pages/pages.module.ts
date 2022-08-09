import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';

import { PagesComponent } from './pages/pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import { NgChartsModule } from 'ng2-charts';
import { AcountsetingsComponent } from './acountsetings/acountsetings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    ProgressComponent,
    GraficaComponent,
    DashboardComponent,
    PagesComponent,
    AcountsetingsComponent,
    PromesasComponent,
    RxjsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    NgChartsModule
  ],
  exports:[
    ProgressComponent,
    GraficaComponent,
    DashboardComponent,
    PagesComponent,
    AcountsetingsComponent]
})
export class PagesModule { }
