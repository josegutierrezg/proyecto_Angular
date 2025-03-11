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

  // Buscar personaje por nombre
  getPersonajePorNombre(nombre: string): Observable<boolean> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        const champions = response.data;
        return champions.hasOwnProperty(nombre);
      })
    );
  }

  // Obtener la imagen del personaje
  getPersonajesbyNombre(nombre: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nombre}_0.jpg`;
  }

  // Método para agregar un nuevo personaje (simulación local)
  agregarPersonaje(nuevoPersonaje: PersonajeInterface): Observable<PersonajeInterface> {
    return new Observable(observer => {
      observer.next(nuevoPersonaje);
      observer.complete();
    });
  }

  // Método para actualizar un personaje (simulación local)
  actualizarPersonaje(personajeActualizado: PersonajeInterface): Observable<PersonajeInterface> {
    return new Observable(observer => {
      observer.next(personajeActualizado);
      observer.complete();
    });
  }

  // Método para eliminar un personaje (simulación local)
  eliminarPersonaje(nombre: string): Observable<boolean> {
    return new Observable(observer => {
      observer.next(true);
      observer.complete();
    });
  }
}
