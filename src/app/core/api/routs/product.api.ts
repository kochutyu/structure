import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {RepositoryService} from '../services/repository.service';

import {IProduct} from '../../../modules/products/components/product/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductApi {

  constructor(
    private repoS: RepositoryService
  ) {
  }

  /**
   * Get
   */
  public getAll(): Observable<IProduct> {
    return this.repoS.get('product/all');
  }


  /**
   * Set
   */
  public setProduct(product: IProduct): Observable<IProduct> {
    return this.repoS.post('product', product);
  }

}
