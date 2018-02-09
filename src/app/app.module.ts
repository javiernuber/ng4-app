import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0lrVyDDy1pzC93dIPFMzivb66LMdv5mQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
