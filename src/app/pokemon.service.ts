import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(offset: number, limit: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  }

  getTotalPokemons(): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1`);
  }

  /*
  getPokemonDetails(url: string): Observable<any> {
    return this.http.get(url);
  }
  */

  getPokemonDetails(name:string ): Observable<any> {
    console.log(`Preguntando por ${name}`);
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
  
}