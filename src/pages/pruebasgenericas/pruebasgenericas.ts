import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from './../../providers/database/database'


@IonicPage()
@Component({
  selector: 'page-pruebasgenericas',
  templateUrl: 'pruebasgenericas.html',
})
export class PruebasgenericasPage {
  mermas = [];
  merma = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private databaseProvide: DatabaseProvider) {
    this.databaseProvide.getDatabaseState().subscribe(rdy => {
      if(rdy){
        this.cargarDatosDeMermas();
      }
    })
  }

  cargarDatosDeMermas(){
    this.databaseProvide.mostrarTodasMermas().then( data => {
      this.mermas = data;
    })
  }

  agregarMerma(){
    this.databaseProvide.agregarMerma(parseInt(this.merma['ord']), this.merma['tip'], this.merma['obs'])
    .then(data => {
      this.cargarDatosDeMermas();
    });
    this.merma = {};
  }

}
