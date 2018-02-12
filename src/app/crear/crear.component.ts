import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  lugar:any = {};

  constructor(private lugaresService: LugaresService){}
  enviarLugar(){
    this.lugar.id = Date.now();
    this.lugaresService.guardarLugar(this.lugar);
    alert("Lugar guardado con éxito!!");
    this.lugar={};
  }
}
