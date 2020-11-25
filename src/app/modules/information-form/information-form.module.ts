import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {InformationFormRoutingModule} from './information-form-routing.module';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    FormComponent
  ],
  exports: [
    FormComponent
  ],
  imports: [
    SharedModule,
    InformationFormRoutingModule
  ]
})
export class InformationFormModule {
}
