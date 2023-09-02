import axios from "axios";
import { PokemonDetails, PokemonListResponse } from "./interface";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemonList(limit?: number, offset?: number) {
  try {
    const offsetParam = offset ? `&offset=${offset}` : '';
    const limitParam = limit ? `&limit=${limit}` : '';
    const response = await axios.get<PokemonListResponse>(
      `${BASE_URL}/pokemon?${limitParam}${offsetParam}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar a lista de Pokémon:', error);
    throw error;
  }
}

export async function fetchPokemonDetails(url: string) {
  try {
    const response = await axios.get<PokemonDetails>(url);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os detalhes do Pokémon:", error);
    throw error;
  }
}
