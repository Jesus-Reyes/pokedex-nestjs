import { Injectable } from '@nestjs/common';

import axios from 'axios';
import { PokemonREST } from './interfaces/pokemons-rest.interface';
import { SeedMapper } from './mappers/seed.mapper';

import { PokemonService } from 'src/pokemon/pokemon.service';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';




@Injectable()
export class SeedService {

  constructor(private readonly pokemonService: PokemonService) { }


  // async executeSeed() {
  //   // realizar una peticion a pokeapi
  //   const response = await axios.get<PokemonREST>('https://pokeapi.co/api/v2/pokemon?limit=10');
  //   const pokemons = SeedMapper.pokemonRestToPokemon(response.data);



  //   // guardar los pokemons en la base de datos
  //  for (const pokemon of pokemons) {
  //     await this.pokemonService.create({ name: pokemon.name, no: pokemon.id });
  //   }


  //   return 'Seed Success';
  // }

  async executeSeed() {
    // realizar una peticion a pokeapi
    const response = await axios.get<PokemonREST>('https://pokeapi.co/api/v2/pokemon?limit=560');
    const pokemons = SeedMapper.pokemonRestToPokemon(response.data);

    // Convert to CreatePokemonDto format
    const createPokemonDtos: CreatePokemonDto[] = pokemons.map(pokemon => ({
      name: pokemon.name,
      no: pokemon.id
    }));

    // Use bulk insertion instead of individual inserts
    await this.pokemonService.createBulk(createPokemonDtos);

    return 'Seed Success';
  }

}
