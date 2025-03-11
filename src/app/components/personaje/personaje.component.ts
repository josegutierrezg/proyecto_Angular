import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { PersonajeInterface } from '../../interfaces/personaje.interface';
import { EquipoService } from '../../services/equipo.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personaje.component.html',
  standalone: false,

  styleUrl: './personaje.component.scss'
})
export class PersonajesComponent implements OnInit {
  personajesList: PersonajeInterface[] = [];
  equipoPersonajes: string[] = [];

  constructor(private personajeService: PersonajeService, private equipoService: EquipoService) {}

  ngOnInit(): void {
    this.getPersonajes();
    this.equipoPersonajes = this.equipoService.getEquipo().personajes;
  }

  getPersonajes() {
    this.personajeService.getPersonajes().subscribe(personajes => {
      this.personajesList = personajes;
    });
  }

  agregarAlEquipo(personaje: PersonajeInterface) {
    this.equipoService.agregarPersonaje(personaje.id);
    this.equipoPersonajes = this.equipoService.getEquipo().personajes;
  }
}
