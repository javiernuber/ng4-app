import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Http, Headers } from "@angular/http";

@Injectable()
export class LugaresService{
  API_ENDPOINT = "https://pruebang4.firebaseio.com";
  constructor(private afDB: AngularFireDatabase, private http: Http){}

  public getLugares(){
    return this.afDB.list('lugares/');
  }

  public buscarlugar(id){
    return this.afDB.object('lugares/'+id);
  }

  public guardarLugar(lugar){
    //this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    const headers = new Headers({"Content-Type": "application/json"})
    return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, {headers:headers});
  }

  public getGeoData(direccion){
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
  }

  public getLugar(id){
    return this.afDB.object('lugares/'+id);
  }
}