import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonInformationComponent } from '../pokemon-information/pokemon-information.component';
import { MatDialog } from '@angular/material/dialog';
import { Pokemon } from '../models/pokemon.model';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css']
})
export class PokemonTableComponent implements OnInit {
  loading: boolean = false;

  pokemons: any[] = [];
  page: number = 1;
  pageSize: number = 5;
  totalPokemons: number = 0;

  constructor(private pokemonService: PokemonService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // Valores iniciales
    this.getPokemons();
    this.pokemonService.getTotalPokemons().subscribe((data: any) => {
      this.totalPokemons = data.count
    })
  }

  // Funcion que hace el llamado a la Api
  getPokemons(page: number = this.page): void {
    const offset = (page - 1) * this.pageSize;
    this.pokemonService.getPokemons(offset, this.pageSize)
      .subscribe((data: any) => {
        this.getInfo(data.results);
      });
  }

  onPageChange(pageNumber: number): void {
    this.loading = true;
    this.page = pageNumber;
    this.getPokemons(this.page);
  }

  // Para cada uno de los elementos obtenidos de la página actual, creamos un Pokemon
  // con toda la info relevante (Para eso necesitamos hacer más consultas a la api)
  getInfo(data: any): void {

    let observables = [];
  
    for (let i = 0; i < data.length; i++) {
      const pokemon = data[i];
      observables.push(this.pokemonService.getPokemonDetails(pokemon.name));
    }
  
    forkJoin(observables).subscribe((results: any[]) => {
      let pokemon_list: any[] = [];
      results.forEach((details_data, index) => {
        let pokemon = data[index];
        let ability_names: string[] = [];

        for (let j = 0 ; j < (details_data.abilities).length; j++){
          ability_names.push(details_data.abilities[j]["ability"]["name"]);
        }

        pokemon_list.push(new Pokemon(
          pokemon.name,
          details_data.weight,
          details_data.base_experience,
          details_data.height,
          ability_names,
          details_data.sprites.front_default
        ));
      });
      
      this.pokemons = pokemon_list;
      this.loading = false;
    });
  }

  showModal(index: number):void { 
    let dialogRef = this.dialog.open(PokemonInformationComponent, {
      height: '400px',
      width: '600px',
      data: this.pokemons[index],
    });
    this.loading = false;
  }

  

 
}