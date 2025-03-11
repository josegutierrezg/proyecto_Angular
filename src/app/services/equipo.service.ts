import { Injectable } from '@angular/core';
import { EquipoInterface } from '../interfaces/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private equipoKey = 'equipoLOL';

  constructor() {}

  getEquipo(): EquipoInterface {
    const equipoGuardado = localStorage.getItem(this.equipoKey);
    return equipoGuardado ? JSON.parse(equipoGuardado) : { nombre: 'Mi Equipo', personajes: [] };
  }

  agregarPersonaje(id: string): void {
    const equipo = this.getEquipo();
    if (equipo.personajes.length < 5 && !equipo.personajes.includes(id)) {
      equipo.personajes.push(id);
      localStorage.setItem(this.equipoKey, JSON.stringify(equipo));
    } else {
      alert('El equipo ya está completo o el personaje ya está agregado.');
    }
  }

  eliminarPersonaje(id: string): void {
    const equipo = this.getEquipo();
    equipo.personajes = equipo.personajes.filter(pid => pid !== id);
    localStorage.setItem(this.equipoKey, JSON.stringify(equipo));
  }

  vaciarEquipo(): void {
    localStorage.setItem(this.equipoKey, JSON.stringify({ nombre: 'Mi Equipo', personajes: [] }));
  }
}
