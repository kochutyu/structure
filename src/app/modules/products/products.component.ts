import {Component, OnInit} from '@angular/core';
import {IProduct} from './components/product/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  public products: IProduct[] = [
    {
      id: 1,
      name: 'Vova',
      description: 'description 1'
    },
    {
      id: 2,
      name: 'Vova',
      description: 'description 1'
    },
    {
      id: 3,
      name: 'Vova',
      description: 'description 1'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  public handleEvent(event): void{
    alert(event);
  }

}
