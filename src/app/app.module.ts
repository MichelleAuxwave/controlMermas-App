import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';

import { DatabaseProvider } from '../providers/database/database';
import { HttpModule} from '@angular/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';

/* PAGINAS */
import {
  HomePage,
  TabsPage,
  HistorialPage,
  NuevogrupoPage,
  GrupoabiertoPage,
  DetallehistorialPage,
  PruebasgenericasPage
} from '../pages/pages.index';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    HistorialPage,
    NuevogrupoPage,
    GrupoabiertoPage,
    DetallehistorialPage,
    PruebasgenericasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    HistorialPage,
    NuevogrupoPage,
    GrupoabiertoPage,
    DetallehistorialPage,
    PruebasgenericasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    SQLitePorter,
    SQLite
  ]
})
export class AppModule {}
