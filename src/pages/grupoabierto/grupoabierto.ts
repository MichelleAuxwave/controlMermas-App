import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-grupoabierto',
  templateUrl: 'grupoabierto.html',
})
export class GrupoabiertoPage {

  radioColor: string = 'dark';

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrupoabiertoPage');
  }

  cambiarRadioColor(){
    this.radioColor = 'shamir1';
  }

  scanBC(){
    this.barcodeScanner.scan().then(barcodeData => {
     console.log('Barcode data', barcodeData);
    }).catch(err => {
        console.log('Error', err);
    });
  }

}
