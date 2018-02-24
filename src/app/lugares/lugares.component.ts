import { Component} from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0,
        backgroundColor: 'green',
        transform: 'rotate3d(0,0,0,0deg)'
      })),
      state('final', style({
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'rotate3d(5,10,20,30deg)'
      })),
      transition('inicial => final', animate(1000)),
      transition('final => inicial', animate(500))
    ])
  ]
})
export class LugaresComponent {
  listo = false;
  state = 'inicial';
  num = 0;
  nombre:string = '';
  apellido:string = '';

  lat:number = 39.8957581;
  lng:number = -6.4741936;

  lugares = null;
  animar() {
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }
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
