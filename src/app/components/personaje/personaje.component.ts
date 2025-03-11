import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule

import { PersonajeService } from '../../services/personaje.service';
import { PersonajeInterface } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personaje.component.html',
  standalone: false,
  styleUrl: './personaje.component.scss'
})
export class PersonajesComponent implements OnInit {
  personajesList: PersonajeInterface[] = [];

  constructor(private personajeService: PersonajeService) {}

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes() {
    this.personajeService.getPersonajes().subscribe({
      next: (result) => {
        this.personajesList = result;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
