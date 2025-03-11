import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PersonajesComponent } from './components/personaje/personaje.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';  // Asegúrate de importar HttpClientModule
import { CapitalizePipe } from './capitalize.pipe';
import { EquipoComponent } from './components/equipo/equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PersonajesComponent,
    PaginaNoEncontradaComponent,
    EquipoComponent,
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
