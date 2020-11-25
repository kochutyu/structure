import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from './interfaces/product.interface';
import {interval} from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  /**
   * Input - передає дані з батьківської в дочірню компоненту через [product]
   */
  @Input() product: IProduct;

  /**
   * Input - передає дані з батьківської в дочірню компоненту через [product]
   */
  @Output() onClick: EventEmitter<number> = new EventEmitter<number>();

  private counter = 0;

  constructor() {
  }

  ngOnInit(): void {
    interval(1000).subscribe(res => {
      this.counter = res;
    });
  }

  public toParent(): void {
    this.counter++;
    console.log('child');
    this.onClick.emit(this.counter);
  }

}
