import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent } from './crear/crear.component';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  {path:'', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'detalle/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'crear/:id', component: CrearComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyCVg8aFc-a7iA7nygVz6J-_67Fp5yLo59A",
  authDomain: "pruebang4.firebaseapp.com",
  databaseURL: "https://pruebang4.firebaseio.com",
  storageBucket: "pruebang4.appspot.com",
  messagingSenderId: "518097046523"
};

@NgModule({
  declarations: [
    AppComponent,
      ResaltarDirective,
      ContarClicksDirective,
      DetalleComponent,
      LugaresComponent,
      ContactoComponent,
      CrearComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0lrVyDDy1pzC93dIPFMzivb66LMdv5mQ'
    }),
    BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule 
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
