import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  showSubmenu: boolean = false;

  entradaDatos: any = [
    { name: 'Gestion Zonas', url: '/dashboard' },
    { name: 'Gestion Población', url: '/home/test' },
    { name: 'Gestion Callejero', url: '/home/gestioninmuebles' },
    { name: 'Gestion Empresas', url: '/home/test' },
    { name: 'Busqueda de Inmuebles', url: '/home/test' },
    { name: 'Gestion Inmuebles', url: '/home/test' },
  ];

  listado: any = [
    { name: 'Listado Inmuebles General', url: '/dashboard' },
    { name: 'Lista Inmuebles Alquiler', url: '/home/test' },
    { name: 'Listado Informacion Inmuebles', url: '/home/gestioninmuebles' },
    { name: 'Listado Anual Clientes 347', url: '/home/test' },
    { name: 'Riesgo Seguro', url: '/home/test' },
    { name: 'Plazas Aparcamiento', url: '/home/test' },
  ];

  constructor(private router: Router) {}

  redirectTo(url: string) {
    this.router.navigate([url]);
  }

  logOut() {
    localStorage.removeItem('userData');
    this.router.navigate(['/auth/login']);
  }
}
