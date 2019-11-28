import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {Item, Product} from './models/product.interface';

@Injectable()
export class StockInventoryService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.jsonServerUrl}/cart`)
      .pipe(
        catchError(error => throwError(error.error))
      );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.jsonServerUrl}/products`)
      .pipe(
        catchError(error => throwError(error.error))
      );
  }

}
