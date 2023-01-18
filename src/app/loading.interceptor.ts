import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { BeersService } from './services/beers.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private beerService: BeersService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.beerService.setLoading(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.beerService.setLoading(false);
      })
    );
  }
}
