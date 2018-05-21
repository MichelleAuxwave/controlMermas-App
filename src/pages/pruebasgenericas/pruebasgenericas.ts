import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-pruebasgenericas',
  templateUrl: 'pruebasgenericas.html',
})
export class PruebasgenericasPage {
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private database : DatabaseProvider) {
  }

  agregarMerma(){
    this.database.guardarOrden(123456, "R", "Orden de ejemplo").then((data) => {
      console.log(data);

      this.consultarMermas();
    }, (error) => {
      console.log(error);
    })
  }

  consultarMermas(){
    this.database.mostrarOrdenesGuardadas().then((data) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    })
  }
}
