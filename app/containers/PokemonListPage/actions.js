/*
 * PokemonListPage actions
 * Action creators for Redux
 */

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

/**
 * Fetch all Pokemon
 */
export function fetchPokemonRequest() {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
}

export function fetchPokemonSuccess(pokemon) {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon,
  };
}

export function fetchPokemonFailure(error) {
  return {
    type: FETCH_POKEMON_FAILURE,
    payload: error,
  };
}

/**
 * Load more Pokemon (lazy loading)
 */
export function loadMorePokemonRequest(offset) {
  return {
    type: LOAD_MORE_POKEMON_REQUEST,
    payload: offset,
  };
}

export function loadMorePokemonSuccess(pokemon) {
  return {
    type: LOAD_MORE_POKEMON_SUCCESS,
    payload: pokemon,
  };
}

export function loadMorePokemonFailure(error) {
  return {
    type: LOAD_MORE_POKEMON_FAILURE,
    payload: error,
  };
}

/**
 * Fetch all Pokemon types
 */
export function fetchTypesRequest() {
  return {
    type: FETCH_TYPES_REQUEST,
  };
}

export function fetchTypesSuccess(types) {
  return {
    type: FETCH_TYPES_SUCCESS,
    payload: types,
  };
}

export function fetchTypesFailure(error) {
  return {
    type: FETCH_TYPES_FAILURE,
    payload: error,
  };
}

/**
 * Set search query for filtering Pokemon
 */
export function setSearchQuery(query) {
  return {
    type: SET_SEARCH_QUERY,
    payload: query,
  };
}

/**
 * Set type filter
 */
export function setTypeFilter(type) {
  return {
    type: SET_TYPE_FILTER,
    payload: type,
  };
}

/**
 * Clear all filters
 */
export function clearFilters() {
  return {
    type: CLEAR_FILTERS,
  };
}

/**
 * Fetch single Pokemon detail
 */
export function fetchPokemonDetailRequest(id) {
  return {
    type: FETCH_POKEMON_DETAIL_REQUEST,
    payload: id,
  };
}

export function fetchPokemonDetailSuccess(pokemon) {
  return {
    type: FETCH_POKEMON_DETAIL_SUCCESS,
    payload: pokemon,
  };
}

export function fetchPokemonDetailFailure(error) {
  return {
    type: FETCH_POKEMON_DETAIL_FAILURE,
    payload: error,
  };
}

/**
 * Reset state
 */
export function resetState() {
  return {
    type: RESET_STATE,
  };
}

/**
 * Thunk action creators that can be dispatched
 */

/**
 * Load Pokemon list (first 151 Pokemon - Gen 1)
 */
export function loadPokemon() {
  return dispatch => {
    dispatch(fetchPokemonRequest());
  };
}

/**
 * Load Pokemon types
 */
export function loadTypes() {
  return dispatch => {
    dispatch(fetchTypesRequest());
  };
}

/**
 * Search Pokemon by name or number
 */
export function searchPokemon(query) {
  return dispatch => {
    dispatch(setSearchQuery(query));
  };
}

/**
 * Filter Pokemon by type
 */
export function filterByType(type) {
  return dispatch => {
    dispatch(setTypeFilter(type));
  };
}

/**
 * Load more Pokemon (lazy loading)
 */
export function loadMorePokemon(offset) {
  return dispatch => {
    dispatch(loadMorePokemonRequest(offset));
  };
}
