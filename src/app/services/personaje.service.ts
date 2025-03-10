// personaje.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonajeInterface } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  private apiUrl = 'https://ddragon.leagueoflegends.com/cdn/14.22.1/data/es_ES/champion.json';

  constructor(private http: HttpClient) {}

  // Obtener todos los personajes
  getPersonajes(): Observable<PersonajeInterface[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        const champions = response.data;
        return Object.keys(champions).map(key => champions[key]); // Convertir objeto en array
      })
    );
  }

  // Verificar si el personaje existe y devolver la URL de la imagen
  getPersonajePorNombre(nombre: string): Observable<boolean> {
    const nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        const champions = response.data;
        return champions.hasOwnProperty(nombreFormateado); // Verificar si el personaje existe en la API
      })
    );
  }

  // Método para obtener la URL de la imagen del personaje
  getPersonajesbyNombre(nombre: string): string {
    const nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nombreFormateado}_0.jpg`;
  }
}
