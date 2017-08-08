import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonesService } from '../../services/pokemones.service';

@Component({
  selector: 'app-buscador-pokemon',
  templateUrl: './buscador-pokemon.component.html',
  styles: []
})
export class BuscadorPokemonComponent implements OnInit {

  pokemon: any[] = [];
  constructor(private params: ActivatedRoute, private pokemones: PokemonesService) {
    this.params.params.subscribe(param => {
      // console.log(params);
      // console.log(this.pokemones.buscarPokemon(param['nombre']));
      this.pokemon = this.pokemones.buscarPokemon(param['nombre']);
    })
  }

  ngOnInit() {
  }

}
