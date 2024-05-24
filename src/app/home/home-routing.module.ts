import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from '../shared/guards/auth.guard';
import { TestComponent } from './pages/test/test.component';
import { HomeComponent } from './home.component';
import { GestionInmueblesComponent } from './pages/gestion-inmuebles/gestion-inmuebles.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivateChild: [authGuard],
    children: [
      { 
        path: 'dashboard', component: DashboardComponent,       
      },
      { 
        path: 'test', component: TestComponent,       
      },
      { 
        path: 'gestioninmuebles', component: GestionInmueblesComponent,       
      },
      {
        path: '**', redirectTo: 'dashboard'
      }
      
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
