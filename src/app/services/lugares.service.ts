import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Http } from "@angular/http";

@Injectable()
export class LugaresService{
  constructor(private afDB: AngularFireDatabase, private http: Http){}

  public getLugares(){
    return this.afDB.list('lugares/');
  }

  public buscarlugar(id){
    return this.afDB.object('lugares/'+id);
  }

  public guardarLugar(lugar){
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }

  public getGeoData(direccion){
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
  }

  public getLugar(id){
    return this.afDB.object('lugares/'+id);
  }
}