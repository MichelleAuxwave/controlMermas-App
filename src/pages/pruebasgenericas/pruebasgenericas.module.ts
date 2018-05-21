import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PruebasgenericasPage } from './pruebasgenericas';
import { DatabaseProvider } from './../../providers/database/database';

@NgModule({
  declarations: [
    PruebasgenericasPage,
  ],
  imports: [
    IonicPageModule.forChild(PruebasgenericasPage),
  ],
  providers: [
    DatabaseProvider
  ]
})
export class PruebasgenericasPageModule {}
