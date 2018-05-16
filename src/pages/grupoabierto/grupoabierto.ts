import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-grupoabierto',
  templateUrl: 'grupoabierto.html',
})
export class GrupoabiertoPage {

  radioColor: string = 'dark';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrupoabiertoPage');
  }

  cambiarRadioColor(){
    this.radioColor = 'shamir1';
  }

}
