import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from './../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-pruebasgenericas',
  templateUrl: 'pruebasgenericas.html',
})
export class PruebasgenericasPage {
  mermas = [];
  merm = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private databaseProvider : DatabaseProvider) {
    this.databaseProvider.getDatabaseState().subscribe(rdy => {
      if(rdy){
        this.cargarinfoMermas();
      }
    })
  }

  cargarinfoMermas(){
    this.databaseProvider.getOT().then(data => {
      this.mermas = data;
    });
  }

  addOT(noOT, tipo, obs){
    this.databaseProvider.addOT(parseInt(this.merm['noOT']), this.merm['tipo'], this.merm['obs'])
    .then(data => {
      this.cargarinfoMermas();
    });
    this.merm = {};
  }

}
