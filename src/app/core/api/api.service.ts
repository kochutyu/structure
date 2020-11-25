import { Injectable } from '@angular/core';
import {ProductApi} from './routs/product.api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public product: ProductApi
  ) { }
}
