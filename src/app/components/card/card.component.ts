import { Component } from '@angular/core';
import { Beer } from 'src/app/models/beer.interface';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  beers: Beer[] = [];

  constructor(private beersService: BeersService) {
  }

  ngOnInit(): void {
    this.beersService.getAllBeers().subscribe((beers) => {
      this.beers = beers;
      console.log(beers);
    });
  }
}
