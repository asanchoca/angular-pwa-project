import { Component } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent {

  view: boolean;

  constructor(public beersService: BeersService) {
    this.view = true;
  }

  ngOnInit(): void {
  }

  changeToListView(): void {
    this.view = true;
  }

  changeToCardView(): void {
    this.view = false;
  }
}
