import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddvacinaPageRoutingModule } from './addvacina-routing.module';

import { AddvacinaPage } from './addvacina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddvacinaPageRoutingModule
  ],
  declarations: [AddvacinaPage]
})
export class AddvacinaPageModule {}
