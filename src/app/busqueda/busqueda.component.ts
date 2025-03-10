// busqueda.component.ts
import { Component } from '@angular/core';
import { PersonajeService } from '../services/personaje.service';

@Component({
  selector: 'app-busqueda',
  standalone: false,
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  nombre: string = '';  // Variable para el nombre del personaje
  imagenPersonaje: string = '';  // Variable para la imagen del personaje
  mensajeError: string = '';  // Variable para mostrar mensaje de error

  constructor(private personajeService: PersonajeService) {}

  // Función que se ejecuta al hacer clic en el botón
  buscarPersonaje() {
    if (!this.nombre.trim()) {
      this.mensajeError = 'Por favor ingresa un nombre de personaje.';
      this.imagenPersonaje = '';  // Limpiar imagen si el nombre está vacío
      return;
    }

    // Llamar al servicio para verificar si el personaje existe
    this.personajeService.getPersonajePorNombre(this.nombre).subscribe(
      (existe) => {
        if (existe) {
          // Si el personaje existe, mostrar la imagen
          this.imagenPersonaje = this.personajeService.getPersonajesbyNombre(this.nombre);
          this.mensajeError = '';  // Limpiar mensaje de error
        } else {
          // Si el personaje no existe, mostrar mensaje de error
          this.mensajeError = 'El personaje no existe. Intenta con otro nombre.';
          this.imagenPersonaje = '';  // Limpiar imagen si el personaje no existe
        }
      },
      (error) => {
        // En caso de error con la solicitud
        this.mensajeError = 'Hubo un error al verificar el personaje.';
        this.imagenPersonaje = '';
      }
    );
  }
}
