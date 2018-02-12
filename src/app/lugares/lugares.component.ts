import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  listo = false;
  num = 0;
  nombre:string = '';
  apellido:string = '';

  lat:number = 39.8957581;
  lng:number = -6.4741936;

  lugares = null;

  constructor(private lugaresService: LugaresService){
    this.lugaresService.getLugares().valueChanges().subscribe(lugares => {
      this.lugares = lugares;
    });
    setTimeout(()=>{
      this.listo = true;
    }, 3000)
  }

  contador(){
    this.num += 1;
  }
}
