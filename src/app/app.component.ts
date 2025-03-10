import { Component } from '@angular/core';
import { PersonajeService } from './services/personaje.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicaAngularJose';
  
  // Propiedades necesarias para el funcionamiento de la búsqueda
  nombre: string = ''; // Variable vinculada con ngModel
  mensajeError: string = ''; // Variable para el mensaje de error
  imagenPersonaje: string | null = null; // URL de la imagen del personaje
  personajes: any[] = []; // Lista de personajes encontrados

  constructor(private personajeService: PersonajeService) {}

  // Método para buscar el personaje
  buscarPersonaje() {
    if (this.nombre.trim() === '') {
      this.mensajeError = 'Por favor, ingresa el nombre del personaje.';
      this.imagenPersonaje = null;
      this.personajes = [];
    } else {
      this.mensajeError = '';
      // Llamar al servicio para verificar si el personaje existe
      this.personajeService.getPersonajePorNombre(this.nombre).subscribe(existe => {
        if (existe) {
          // Si el personaje existe, obtener la imagen y la lista de personajes
          this.imagenPersonaje = this.personajeService.getPersonajesbyNombre(this.nombre);
          this.personajeService.getPersonajes().subscribe(personajes => {
            // Filtrar los personajes que coincidan con el nombre ingresado
            this.personajes = personajes.filter(personaje => 
              personaje.name.toLowerCase().includes(this.nombre.toLowerCase())
            );
          });
        } else {
          // Si no existe el personaje
          this.mensajeError = 'Personaje no encontrado.';
          this.imagenPersonaje = null;
          this.personajes = [];
        }
      });
    }
  }
}
