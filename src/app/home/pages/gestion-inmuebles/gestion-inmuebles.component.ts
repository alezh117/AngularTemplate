import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-inmuebles',
  templateUrl: './gestion-inmuebles.component.html',
  styleUrls: ['./gestion-inmuebles.component.css']
})
export class GestionInmueblesComponent {

    filters: any =[
      { name: 'Filtro 1', url: '#' },
      { name: 'Filtro 2', url: '#' },
      { name: 'Filtro 3', url: '#' },
      { name: 'Filtro 4', url: '#' },
      { name: 'Filtro 5', url: '#' },
      { name: 'Filtro 6', url: '#' },
      { name: 'Filtro 7', url: '#' },
      { name: 'Filtro 8', url: '#' },
      { name: 'Filtro 9', url: '#' },
      { name: 'Filtro 10', url: '#' },
      { name: 'Filtro 11', url: '#' },
      { name: 'Filtro 12', url: '#' },
    ];

    dividedItems: any[][];
    elements : any = [];

    constructor() {

      for (let i = 1; i <= 10; i++) {
      this.elements.push(i);
    }

      this.dividedItems = this.divideArray(this.filters, 3);
      for (let i = 1; i <= 20; i++) {
        this.elements.push(i);
      }
    }
  
    divideArray(array: any[], chunkSize: any): any[][] {
      const result = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
      }
      return result;
    }

}
