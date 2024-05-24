import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './home-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { TestComponent } from './pages/test/test.component';
import { HomeComponent } from './home.component';

//Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { GestionInmueblesComponent } from './pages/gestion-inmuebles/gestion-inmuebles.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    TestComponent,
    HomeComponent,
    GestionInmueblesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class HomeModule { }
