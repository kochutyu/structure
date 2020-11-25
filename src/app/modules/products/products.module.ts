import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductComponent} from './components/product/product.component';

@NgModule({
  declarations: [
    ProductComponent,
  ],
  exports: [
    ProductComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule {
}
