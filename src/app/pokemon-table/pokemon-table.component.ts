import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonInformationComponent } from '../pokemon-information/pokemon-information.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css']
})
export class PokemonTableComponent implements OnInit {
  loading: boolean = false;

  pokemons: any[] = [];
  page: number = 1;
  pageSize: number = 8;
  totalPokemons: number = 0;

  constructor(private pokemonService: PokemonService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPokemons();
    this.pokemonService.getTotalPokemons().subscribe((data: any) => {
      this.totalPokemons = data.count
    })
  }

  getPokemons(page: number = this.page): void {
    const offset = (page - 1) * this.pageSize;
    this.pokemonService.getPokemons(offset, this.pageSize)
      .subscribe((data: any) => {
        this.pokemons = data.results;
        this.loading = false;
      });
  }

  onPageChange(pageNumber: number): void {
    this.loading = true;
    this.page = pageNumber;
    this.getPokemons(this.page);
  }

  alertar(nombre: string):void {
    this.loading = true;
    let pokemonData: any;
    

    this.pokemonService.getPokemonDetails(nombre)
      .subscribe((data: any) => {
        pokemonData = data;
        pokemonData["pokemon_name"] = nombre
        console.log(data);
        
        let dialogRef = this.dialog.open(PokemonInformationComponent, {
          height: '400px',
          width: '600px',
          data: pokemonData,
        });
        this.loading = false;
      });



    
    
  }

  

 
}