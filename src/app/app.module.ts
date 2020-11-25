import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductsComponent} from './modules/products/products.component';
import {InformationFormComponent} from './modules/information-form/information-form.component';
import {AppRoutingModule} from './app-routing.module';
import {InformationFormModule} from './modules/information-form/information-form.module';
import { HomeComponent } from './modules/home/home.component';
import {ProductsModule} from './modules/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    InformationFormComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    InformationFormModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
