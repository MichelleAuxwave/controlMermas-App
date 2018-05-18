import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite'
import { BehaviorSubject } from 'rxjs/Rx';
import { IonicStorageModule } from '@ionic/storage';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  constructor(
    public http: HttpClient,
    private sqlitePorter: SQLitePorter,
    private storage: Storage,
    private sqlite: SQLite,
    private platform: Platform,
    private httpModule: HttpModule
  )
    {
      this.databaseReady = new BehaviorSubject(false);
      this.platform.ready().then(() => {
        this.sqlite.create({
          name: 'example.db',
          location: 'default'
        })
        .then((db: SQLiteObject ) => {
          this.database = db;
          this.storage.get('database_filled').then( val => {
            if(val){
              this.databaseReady.next(true);
            }
            else{
              this.fillDatabase();
            }
          });
        });
      });
    }

  fillDatabase(){
    this.http.get('assets/sampleDB.sql')
    .map(res => res.toString())
    .subscribe( sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
      .then(data => {
        this.databaseReady.next(true);
        this.storage.set('database_filled', true);
      })
      .catch(e => console.log(e));
    });
  }

  addOT(noOT, tipo, obs){
    let data = [noOT, tipo, obs];
    return this.database.executeSql("insert into mermasguardadas (noOT, tipo, obs) values (?, ?, ?)", data).then(res =>{
      return res;
    })
  }

  getOT(){
    return this.database.executeSql("select * from mermasguardadas", []).then(data => {
      let mermas = [];
      if (data.rows.length > 0){
        for(var i = 0; i < data.rows.length; i++){
          mermas.push({noOT: data.rows.item(i).noOT, tipo: data.rows.item(i).tipo, obs: data.rows.item(i).obs});
        }
      }
      return mermas;
    }, err => {
      console.log('Error: ', err);
      return [];
    })
  }

  getDatabaseState(){
    return this.databaseReady.asObservable();
  }

}
