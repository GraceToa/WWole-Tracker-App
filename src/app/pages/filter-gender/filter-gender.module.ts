import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterGenderPageRoutingModule } from './filter-gender-routing.module';

import { FilterGenderPage } from './filter-gender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterGenderPageRoutingModule
  ],
  declarations: [FilterGenderPage]
})
export class FilterGenderPageModule {}
