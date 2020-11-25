import {NgModule} from '@angular/core';
import {InformationFormComponent} from './information-form.component';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './components/form/form.component';

const routes: Routes = [
  {
    path: '', component: InformationFormComponent, children: [
      {path: '', redirectTo: '', pathMatch: 'full'},
      {
        path: 'contacts', component: FormComponent
      },
      {
        path: 'info', component: FormComponent
      },
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationFormRoutingModule {
}
