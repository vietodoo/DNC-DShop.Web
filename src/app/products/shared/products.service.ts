import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './../../shared/auth.service';
import { ProductModel } from './product.model';
import { BaseApiService } from '../../shared/base-api.service';
import { PagedResult } from '../../shared/paged-result';


@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseApiService {

  constructor(http: HttpClient, authService: AuthService) { 
    super(http, authService);
  }

  browse() : Observable<ProductModel[]> {
    return super.get<ProductModel[]>('products', false);
  }
}