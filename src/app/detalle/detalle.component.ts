import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  lugares:any = [
    {id: 1, plan:'pagado', cercania: 1, distancia:1, active:true, nombre: "Empresa 1", description:"Descripción de prueba"},
    {id: 2, plan:'gratuito', cercania: 1, distancia:1.5, active:true, nombre: "Empresa 2", description:"Descripción de prueba"},
    {id: 3, plan:'gratuito', cercania: 2, distancia:5, active:true, nombre: "Empresa 3", description:"Descripción de prueba"},
    {id: 4, plan:'gratuito', cercania: 2, distancia:7, active:true, nombre: "Empresa 4", description:"Descripción de prueba"},
    {id: 5, plan:'gratuito', cercania: 3, distancia:10, active:false, nombre: "Empresa 5", description:"Descripción de prueba"},
    {id: 6, plan:'pagado', cercania: 3, distancia:40, active:true, nombre: "Empresa 6", description:"Descripción de prueba"},
    {id: 7, plan:'gratuito', cercania: 3, distancia:145, active:true, nombre: "Empresa 7", description:"Descripción de prueba"}
  ];
  id = null;
  lugar:any = {};

  constructor(private route: ActivatedRoute){
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    console.log(this.route.snapshot.queryParams['refer']);
    this.id = this.route.snapshot.params['id'];
    this.lugar=this.buscarlugar();
  }

  buscarlugar(){
    return this.lugares.filter((lugar) => { return lugar.id == this.id })[0] || null;
  }
}
