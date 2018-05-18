import { Platform } from 'ionic-angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { IonicStorageModule } from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite'
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  constructor(
    public http: Http,
    private sqlitePorter: SQLitePorter,
    private storage: Storage,
    private sqlite: SQLite,
    private platform: Platform
  )
  {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(()=> {
      this.sqlite.create({
        name: 'internalDB.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        this.database = db;
        this.storage.get('database_filled').then(val => {
          if (val){
            this.databaseReady.next(true);
          }
          else{
            this.fillDatabase();
          }
        })
      })
    })
  }

  fillDatabase(){
    this.http.get('assets/internalDB.sql')
    .map(res => res.text())
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
      .then(data => {
        this.databaseReady.next(true);
        this.storage.set('database_filled', true);
      })
      .catch(e => console.log(e));
    })
  }

  agregarMerma(ord, tip, obs){
    let data = [ord, tip, obs];
    return this.database.executeSql("insert into mermasguardadas (ord, tip, obs) values (?, ?, ?)", data)
    .then(res => {
      return res;
    });
  }

  mostrarTodasMermas(){
    return this.database.executeSql("select * from mermasguardadas", [])
    .then(data =>{
      let mermas = [];
      if(data.rows.length > 0){
        for(var i = 0; i < data.rows.lenght; i++){
          mermas.push({ ord: data.rows.item(i).ord, tip: data.rows.item(i).tip, obs: data.rows.item(i).obs });
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
