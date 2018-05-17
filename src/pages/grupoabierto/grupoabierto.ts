import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-grupoabierto',
  templateUrl: 'grupoabierto.html',
})

export class GrupoabiertoPage {



  radioColor: string = 'dark';
  noOrdenEscaneada : string;
  noOrdenLeida: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private storage: Storage) {
  }

  cambiarRadioColor(){
    this.radioColor = 'shamir1';
  }

  scanBC(){
    this.barcodeScanner.scan().then(barcodeData => {
      if(!barcodeData.cancelled == true){
        this.noOrdenEscaneada = barcodeData.text;
      }
    }).catch(err => {
        console.log('Error', err);
    });
  }

  guardarScan(){
    this.storage.set('ordenEscaneada', this.noOrdenEscaneada);

    this.storage.get('ordenEscaneada').then((val) => {
    this.noOrdenLeida = val;
  });
  }

}
