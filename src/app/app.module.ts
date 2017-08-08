import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { POKE_ROUTING } from './app.routes';
// Services
import { PokemonesService } from './services/pokemones.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonenInfoComponent } from './components/pokemonen-info/pokemonen-info.component';
import { BuscadorPokemonComponent } from './components/buscador-pokemon/buscador-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PokemonesComponent,
    PokemonenInfoComponent,
    BuscadorPokemonComponent
  ],
  imports: [
    BrowserModule,
    POKE_ROUTING
  ],
  providers: [PokemonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
