import { Injectable } from '@angular/core';

export interface PokemonRules {
  id: number,
  nombre: string,
  imagen: string,
  tipo: string,
  bio: string
}

@Injectable()
export class PokemonesService {

  pokemones: PokemonRules[] = [
    {
      'id': 0,
      'nombre': 'Bulbasaur',
      'imagen': '001.png',
      'tipo': 'Planta',
      'bio': 'Bulbasaur es fácil verle echándose una siesta al sol.'
    },
    {
      'id': 1,
      'nombre': 'Charmander',
      'imagen': '002.png',
      'tipo': 'Fuego',
      'bio': 'La llama que tiene en la punta de la cola arde según sus sentimientos.'
    },
    {
      'id': 2,
      'nombre': 'Squirtle',
      'imagen': '003.png',
      'tipo': 'Agua',
      'bio': 'El caparazón de Squirtle no le sirve de protección únicamente.'
    },
    {
      'id': 3,
      'nombre': 'Pikachu',
      'imagen': '004.png',
      'tipo': 'Elétrico',
      'bio': 'Cada vez que un Pikachu se encuentra con algo nuevo, le lanza una descarga eléctrica.'
    }
  ];

  obtenerPokemones() {
    return this.pokemones;
  }

  obtenerPokemon(id: number) {
    const pokeArr = [];
    for (const pokemon of this.pokemones) {
      if (pokemon.id == id) {
        pokeArr.push(pokemon);
      }
    }
    return pokeArr;
  }

  buscarPokemon(termino: string) {
    const pokeArr = [];
    termino = termino.toLocaleLowerCase();
    for (const pokemon of this.pokemones) {
      const nombre = pokemon.nombre.toLocaleLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        pokeArr.push(pokemon);
      }
    }
    return pokeArr;
  }

  constructor() { }

}
