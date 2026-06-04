import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoteriasPageRoutingModule } from '../loterias-routing.module';

import { LoteriasHomePage } from './loterias-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoteriasPageRoutingModule,
    LoteriasHomePage
  ],
  declarations: []
})
export class LoteriasHomePageModule {}
