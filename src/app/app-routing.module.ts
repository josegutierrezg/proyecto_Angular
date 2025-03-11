import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './components/personaje/personaje.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';

export const routes: Routes = [{
  path:'personajes',component:PersonajesComponent
  
},
{
  path:'',component:PersonajesComponent
},
{
  path:'busqueda',component:BusquedaComponent
},
{ path: '**', component: PaginaNoEncontradaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





