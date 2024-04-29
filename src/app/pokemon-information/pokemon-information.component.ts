import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef,} from '@angular/material/dialog';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-information',
  templateUrl: './pokemon-information.component.html',
  styleUrl: './pokemon-information.component.css'
})
export class PokemonInformationComponent {

  constructor(public dialogRef: MatDialogRef<PokemonInformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pokemon) { }



  closeModal(): void {
    this.dialogRef.close();
  }

}
