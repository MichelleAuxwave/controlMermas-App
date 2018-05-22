import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-pruebasgenericas',
  templateUrl: 'pruebasgenericas.html',
})
export class PruebasgenericasPage {
  merm = {};
  private ListaMermas : any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private database : DatabaseProvider, public toastCtrl: ToastController) {
      this.consultarMermas();
  }

  agregarMerma(){
    this.database.guardarOrden(parseInt(this.merm['ord']), this.merm['tip'], this.merm['obs']).then(
      (data) => { console.log(data); this.consultarMermas(); },
      (error) => {
        let eee = this.toastCtrl.create({
          message: error,
          duration: 5000
        });
        eee.present();
    });
    this.merm = {};
  }

  consultarMermas(){
    this.database.mostrarOrdenesGuardadas().then(
      (data) => { this.ListaMermas = data;},
      (error) => {
        let eee = this.toastCtrl.create({
          message: error,
          duration: 5000
        });
        eee.present();
    });
  }
}
