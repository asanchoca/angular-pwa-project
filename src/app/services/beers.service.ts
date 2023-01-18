import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer.interface';

@Injectable({
  providedIn: 'root'
})

export class BeersService {

  private loading: boolean = false;

  constructor(private http: HttpClient) {
  }

  getAllBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>('https://api.punkapi.com/v2/beers?page=1&per_page=10');
  }

  getBeerById(id: string): Observable<Beer> {
    return this.http.get<Beer>('https://api.punkapi.com/v2/beers/' + id);
  }

  setLoading(loading: boolean): void {
    this.loading = loading;
  }

  getLoading(): boolean {
    return this.loading;
  }
}
