import { Component, OnInit } from '@angular/core';

// Services
import { PokemonesService, PokemonRules } from '../../services/pokemones.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styles: []
})
export class PokemonesComponent implements OnInit {

  pokemones: PokemonRules[] = [];
  constructor(private _pokemones: PokemonesService) { }

  ngOnInit() {
    // console.log(this._pokemones.obtenerPokemones());
    this.pokemones = this._pokemones.obtenerPokemones();
  }

}
