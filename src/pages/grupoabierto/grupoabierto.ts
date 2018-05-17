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
  noOrdenLeida: any;
  datosGuardados:any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private storage: Storage) {
  }

  cambiarRadioColor(){
    this.radioColor = 'shamir1';
  }

  scanBC(){
    this.barcodeScanner.scan().then(barcodeData => {
      if(!barcodeData.cancelled == true){
        this.guardarScan( barcodeData.text );
      }
    }).catch(err => {
        console.log('Error', err);
    });
  }

  guardarScan( valor:string ){
      this.storage.set('ordenEscaneada', valor);
      this.storage.get('ordenEscaneada').then((val) => {
      this.noOrdenLeida = val;
    });
  }

}
