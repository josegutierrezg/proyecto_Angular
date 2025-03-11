import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { PersonajeService } from '../../services/personaje.service';
import { PersonajeInterface } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  standalone:false,
  styleUrl: './equipo.component.scss'
})
export class EquipoComponent implements OnInit {
  equipoPersonajes: PersonajeInterface[] = [];

  constructor(private equipoService: EquipoService, private personajeService: PersonajeService) {}

  ngOnInit(): void {
    this.cargarEquipo();
  }

  cargarEquipo() {
    const equipo = this.equipoService.getEquipo();
    this.personajeService.getPersonajes().subscribe(personajes => {
      this.equipoPersonajes = personajes.filter(p => equipo.personajes.includes(p.id));
    });
  }

  eliminarPersonaje(id: string) {
    this.equipoService.eliminarPersonaje(id);
    this.cargarEquipo();
  }

  vaciarEquipo() {
    this.equipoService.vaciarEquipo();
    this.cargarEquipo();
  }
}
