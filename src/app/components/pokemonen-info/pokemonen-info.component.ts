import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PokemonesService } from '../../services/pokemones.service';

@Component({
  selector: 'app-pokemonen-info',
  templateUrl: './pokemonen-info.component.html',
  styles: []
})
export class PokemonenInfoComponent implements OnInit {

  pokemon: any[] = [];

  constructor(private ParamsRouter: ActivatedRoute, private pokemonServicio: PokemonesService) {
    this.ParamsRouter.params.subscribe(params => {
      // console.log(this.pokemonServicio.obtenerPokemon(params['id']));
      this.pokemon = this.pokemonServicio.obtenerPokemon(params['id']);
    })
  }

  ngOnInit() {
  }

}
