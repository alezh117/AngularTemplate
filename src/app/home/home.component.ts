import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isExpanded: boolean = true;
  showFiller = false;

  changeFiller(){
    this.showFiller = !this.showFiller;
  }
}
