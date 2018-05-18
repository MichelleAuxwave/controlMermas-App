import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite'
import { BehaviorSubject } from 'rxjs/Rx';
import { IonicStorageModule } from '@ionic/storage';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import 'rxjs/add/operator/map';

@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  constructor(
    public http: HttpClient,
    private sqlitePorter: SQLitePorter,
    private storage: Storage,
    private sqlite: SQLite,
    private platform: Platform)
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

  getDatabaseState(){
    return this.databaseReady.asObservable();
  }

}
