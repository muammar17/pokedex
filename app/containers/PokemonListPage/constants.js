/*
 * PokemonListPage constants
 * Action types for Redux
 */

// Pokemon data fetching
export const FETCH_POKEMON_REQUEST =
  'app/PokemonListPage/FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS =
  'app/PokemonListPage/FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE =
  'app/PokemonListPage/FETCH_POKEMON_FAILURE';

// Load more Pokemon (lazy loading)
export const LOAD_MORE_POKEMON_REQUEST =
  'app/PokemonListPage/LOAD_MORE_POKEMON_REQUEST';
export const LOAD_MORE_POKEMON_SUCCESS =
  'app/PokemonListPage/LOAD_MORE_POKEMON_SUCCESS';
export const LOAD_MORE_POKEMON_FAILURE =
  'app/PokemonListPage/LOAD_MORE_POKEMON_FAILURE';

// Type filtering
export const FETCH_TYPES_REQUEST = 'app/PokemonListPage/FETCH_TYPES_REQUEST';
export const FETCH_TYPES_SUCCESS = 'app/PokemonListPage/FETCH_TYPES_SUCCESS';
export const FETCH_TYPES_FAILURE = 'app/PokemonListPage/FETCH_TYPES_FAILURE';

// Search and filter actions
export const SET_SEARCH_QUERY = 'app/PokemonListPage/SET_SEARCH_QUERY';
export const SET_TYPE_FILTER = 'app/PokemonListPage/SET_TYPE_FILTER';
export const CLEAR_FILTERS = 'app/PokemonListPage/CLEAR_FILTERS';

// Pokemon detail fetching
export const FETCH_POKEMON_DETAIL_REQUEST =
  'app/PokemonListPage/FETCH_POKEMON_DETAIL_REQUEST';
export const FETCH_POKEMON_DETAIL_SUCCESS =
  'app/PokemonListPage/FETCH_POKEMON_DETAIL_SUCCESS';
export const FETCH_POKEMON_DETAIL_FAILURE =
  'app/PokemonListPage/FETCH_POKEMON_DETAIL_FAILURE';

// Reset state
export const RESET_STATE = 'app/PokemonListPage/RESET_STATE';
