import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './personaje/personaje.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

export const routes: Routes = [{
  path:'personajes',component:PersonajesComponent
  
},
{
  path:'',component:PersonajesComponent
},
{
  path:'busqueda',component:BusquedaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





