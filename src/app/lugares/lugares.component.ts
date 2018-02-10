import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  listo = false;
  num = 0;
  nombre:string = '';
  apellido:string = '';
  lugares:any = [
    {plan:'pagado', cercania: 1, distancia:1, active:true, nombre: "Empresa 1"},
    {plan:'gratuito', cercania: 1, distancia:1.5, active:true, nombre: "Empresa 2"},
    {plan:'gratuito', cercania: 2, distancia:5, active:true, nombre: "Empresa 3"},
    {plan:'gratuito', cercania: 2, distancia:7, active:true, nombre: "Empresa 4"},
    {plan:'gratuito', cercania: 3, distancia:10, active:false, nombre: "Empresa 5"},
    {plan:'pagado', cercania: 3, distancia:40, active:true, nombre: "Empresa 6"},
    {plan:'gratuito', cercania: 3, distancia:145, active:true, nombre: "Empresa 7"}
  ];
  lat:number = 39.8957581;
  lng:number = -6.4741936;

  constructor(){
    setTimeout(()=>{
      this.listo = true;
    }, 3000)
  }

  contador(){
    this.num += 1;
  }
}
