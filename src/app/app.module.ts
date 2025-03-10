import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PersonajesComponent } from './personaje/personaje.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Asegúrate de importar HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PersonajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
