import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-pruebasgenericas',
  templateUrl: 'pruebasgenericas.html',
})
export class PruebasgenericasPage {
  mermas = {};
  merm = {};

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private database : DatabaseProvider) {
  }

  agregarMerma(){
    this.database.guardarOrden(parseInt(this.merm['ord']), this.merm['tip'], this.merm['obs']).then((data) => {
      console.log(data);
      this.consultarMermas();
    }, (error) => {
      console.log(error);
    })
    this.merm = {};
  }

  consultarMermas(){
    this.database.mostrarOrdenesGuardadas().then((data) => {
      console.log(data);
      this.mermas = data;
    }, (error) => {
      console.log(error);
    })
  }
}
