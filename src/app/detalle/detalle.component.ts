import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  id = null;
  lugares:any = {};
  lugar:any = {};

  constructor(private route: ActivatedRoute, private lugaresService: LugaresService){
    this.lugares = lugaresService.getLugares();
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    console.log(this.route.snapshot.queryParams['refer']);
    this.id = this.route.snapshot.params['id'];
    this.lugaresService.buscarlugar(this.id).valueChanges().subscribe(lugar => {
      this.lugar = lugar;
    });;
  }
}
