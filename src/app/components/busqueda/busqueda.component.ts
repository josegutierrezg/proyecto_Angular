import { Component } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { CapitalizePipe } from '../../capitalize.pipe';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
  standalone: false,
  providers: [CapitalizePipe]
})
export class BusquedaComponent {
  nombre: string = '';
  imagenPersonaje: string | null = null;
  mensajeError: string | null = null;

  constructor(private personajeService: PersonajeService, private capitalizePipe: CapitalizePipe) {}

  buscarPersonaje(): void {
    const nombreFormateado = this.capitalizePipe.transform(this.nombre); // Aplico el pipe
    this.imagenPersonaje = this.personajeService.getPersonajesbyNombre(nombreFormateado);

    this.personajeService.getPersonajePorNombre(nombreFormateado).subscribe(existe => {
      if (existe) {
        this.mensajeError = null;
      } else {
        this.imagenPersonaje = null;
        this.mensajeError = 'Personaje no encontrado';
      }
    });
  }
}
