
import { Pokemon } from "../interfaces/pokemon.interface";
import { PokemonREST } from "../interfaces/pokemons-rest.interface";



export class SeedMapper {


    static pokemonRestToPokemon(pokemonRest: PokemonREST): Pokemon[] {

        const pokemons = pokemonRest.results.map(pokemon => ({
            id: this.extractIdFromUrl(pokemon.url),
            name: pokemon.name
        }));

        return pokemons;
    }

    
    private static extractIdFromUrl(url: string): number {
        const segments = url.split('/');
        return Number(segments[segments.length - 2]);
    }

}