import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NuevogrupoPage, GrupoabiertoPage, PruebasgenericasPage } from "../pages.index";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nuevoGrupo:any = NuevogrupoPage;
  grupoAbierto:any = GrupoabiertoPage;
  pruebas:any = PruebasgenericasPage;

  constructor(public navCtrl: NavController) {

  }
}
