import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';


@NgModule({
  declarations: [
    BreadcrumsComponent,
    SidebarComponent,
    HeaderComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    BreadcrumsComponent,
    SidebarComponent,
    HeaderComponent],
})
export class SharedModule { }
