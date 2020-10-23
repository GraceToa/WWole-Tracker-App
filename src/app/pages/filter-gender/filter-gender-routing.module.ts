import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterGenderPage } from './filter-gender.page';

const routes: Routes = [
  {
    path: '',
    component: FilterGenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterGenderPageRoutingModule {}
