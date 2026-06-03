/*
 * PokemonListPage reducer
 * Manages state for Pokemon list page
 */

import produce from 'immer';
import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  LOAD_MORE_POKEMON_REQUEST,
  LOAD_MORE_POKEMON_SUCCESS,
  LOAD_MORE_POKEMON_FAILURE,
  FETCH_TYPES_REQUEST,
  FETCH_TYPES_SUCCESS,
  FETCH_TYPES_FAILURE,
  SET_SEARCH_QUERY,
  SET_TYPE_FILTER,
  CLEAR_FILTERS,
  FETCH_POKEMON_DETAIL_REQUEST,
  FETCH_POKEMON_DETAIL_SUCCESS,
  FETCH_POKEMON_DETAIL_FAILURE,
  RESET_STATE,
} from './constants';

export const initialState = {
  // Pokemon data
  pokemonList: [],
  pokemonMap: {}, // Map for quick lookup by id
  filteredPokemon: [],

  // Pagination / Lazy loading
  offset: 0,
  limit: 10, // Load 10 items per batch
  hasMore: true, // Still have more Pokemon to load
  loadingMore: false, // Loading next batch

  // Types data
  types: [],
  typesLoading: false,
  typesError: null,

  // Loading states
  loading: false,
  error: null,

  // Filter states
  searchQuery: '',
  selectedType: null,

  // Pokemon detail
  pokemonDetail: null,
  pokemonDetailLoading: false,
  pokemonDetailError: null,
};

/* eslint-disable default-case, no-param-reassign, consistent-return */
const pokemonListPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_POKEMON_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;

      case FETCH_POKEMON_SUCCESS:
        draft.loading = false;
        draft.pokemonList = action.payload;
        // Create map for quick lookup
        action.payload.forEach(pokemon => {
          draft.pokemonMap[pokemon.id] = pokemon;
        });
        // Apply current filters
        draft.filteredPokemon = applyFilters(
          action.payload,
          draft.searchQuery,
          draft.selectedType,
        );
        break;

      case FETCH_POKEMON_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;

      case FETCH_TYPES_REQUEST:
        draft.typesLoading = true;
        draft.typesError = null;
        break;

      case FETCH_TYPES_SUCCESS:
        draft.typesLoading = false;
        draft.types = action.payload;
        break;

      case FETCH_TYPES_FAILURE:
        draft.typesLoading = false;
        draft.typesError = action.payload;
        break;

      case SET_SEARCH_QUERY:
        draft.searchQuery = action.payload;
        draft.filteredPokemon = applyFilters(
          draft.pokemonList,
          action.payload,
          draft.selectedType,
        );
        break;

      case SET_TYPE_FILTER:
        draft.selectedType = action.payload;
        draft.filteredPokemon = applyFilters(
          draft.pokemonList,
          draft.searchQuery,
          action.payload,
        );
        break;

      case CLEAR_FILTERS:
        draft.searchQuery = '';
        draft.selectedType = null;
        draft.filteredPokemon = draft.pokemonList;
        break;

      case LOAD_MORE_POKEMON_REQUEST:
        draft.loadingMore = true;
        break;

      case LOAD_MORE_POKEMON_SUCCESS:
        draft.loadingMore = false;
        // Append new Pokemon to existing list
        action.payload.forEach(pokemon => {
          draft.pokemonList.push(pokemon);
          draft.pokemonMap[pokemon.id] = pokemon;
        });
        // Update offset
        draft.offset = draft.offset + action.payload.length;
        // Check if we've loaded all 151 Pokemon
        draft.hasMore = draft.pokemonList.length < 151;
        // Re-apply filters
        draft.filteredPokemon = applyFilters(
          draft.pokemonList,
          draft.searchQuery,
          draft.selectedType,
        );
        break;

      case LOAD_MORE_POKEMON_FAILURE:
        draft.loadingMore = false;
        draft.error = action.payload;
        break;

      case FETCH_POKEMON_DETAIL_REQUEST:
        draft.pokemonDetailLoading = true;
        draft.pokemonDetailError = null;
        break;

      case FETCH_POKEMON_DETAIL_SUCCESS:
        draft.pokemonDetailLoading = false;
        draft.pokemonDetail = action.payload;
        break;

      case FETCH_POKEMON_DETAIL_FAILURE:
        draft.pokemonDetailLoading = false;
        draft.pokemonDetailError = action.payload;
        break;

      case RESET_STATE:
        return initialState;

      default:
        return draft;
    }
  }) || state;

/**
 * Helper function to apply filters to Pokemon list
 */
const applyFilters = (pokemonList, searchQuery, selectedType) => {
  let filtered = pokemonList;

  // Apply search filter
  if (searchQuery && searchQuery.trim() !== '') {
    const query = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(pokemon => {
      const nameMatch = pokemon.name.toLowerCase().includes(query);
      const idMatch = pokemon.id.toString().includes(query);
      return nameMatch || idMatch;
    });
  }

  // Apply type filter
  if (selectedType) {
    filtered = filtered.filter(
      pokemon =>
        pokemon.types &&
        pokemon.types.some(
          type => type.type.name.toLowerCase() === selectedType.toLowerCase(),
        ),
    );
  }

  return filtered;
};

export default pokemonListPageReducer;
