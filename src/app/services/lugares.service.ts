import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class LugaresService{
  constructor(private afDB:AngularFireDatabase){}

  public getLugares(){
    return this.afDB.list('lugares/');
  }

  public buscarlugar(id){
    return this.afDB.object('lugares/'+id);
  }

  public guardarLugar(lugar){
    console.log(lugar);
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }
}