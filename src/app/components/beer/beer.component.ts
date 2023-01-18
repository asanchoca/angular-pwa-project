import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from 'src/app/models/beer.interface';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent {

  beer: Beer | undefined;

  constructor(private beersService: BeersService, private activatedRoute: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {
    let identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Identifier --> ", identifier);

    this.beersService.getBeerById(identifier!).subscribe((beer: any) => {
      if(!beer) {
        return this.router.navigateByUrl('/');
      }
      this.beer = beer[0];
      console.log("Beer --> ", this.beer);
    });
  }
}

