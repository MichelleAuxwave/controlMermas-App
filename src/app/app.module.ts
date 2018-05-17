import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';


/* PAGINAS */
import {
  HomePage,
  TabsPage,
  HistorialPage,
  NuevogrupoPage,
  GrupoabiertoPage,
  DetallehistorialPage
} from '../pages/pages.index';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    HistorialPage,
    NuevogrupoPage,
    GrupoabiertoPage,
    DetallehistorialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    HistorialPage,
    NuevogrupoPage,
    GrupoabiertoPage,
    DetallehistorialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
