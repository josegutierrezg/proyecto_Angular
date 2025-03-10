import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PersonajesComponent } from './personaje/personaje.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';  // Asegúrate de importar HttpClientModule
import { CapitalizePipe } from './capitalize.pipe'; // Importar la nueva pipe

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PersonajesComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CapitalizePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
