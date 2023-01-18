import { Component } from '@angular/core';
import { Beer } from 'src/app/models/beer.interface';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

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
