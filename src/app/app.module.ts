import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

/* PLUGINS */
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseProvider } from '../providers/database/database';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage';

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
    PruebasgenericasPage,
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
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
    DetallehistorialPage,
    PruebasgenericasPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    SQLitePorter,
    SQLite,
    IonicStorageModule,
    HttpModule
  ]
})
export class AppModule {}
