/*
 * PokemonDetailPage actions
 * Action creators for Redux
 */

import {
  FETCH_POKEMON_DETAIL_REQUEST,
  FETCH_POKEMON_DETAIL_SUCCESS,
  FETCH_POKEMON_DETAIL_FAILURE,
  FETCH_SPECIES_REQUEST,
  FETCH_SPECIES_SUCCESS,
  FETCH_SPECIES_FAILURE,
  RESET_STATE,
} from './constants';

/**
 * Fetch Pokemon detail by ID
 */
export function fetchPokemonDetailRequest(id) {
  return {
    type: FETCH_POKEMON_DETAIL_REQUEST,
    payload: id,
  };
}

export function fetchPokemonDetailSuccess(detail) {
  return {
    type: FETCH_POKEMON_DETAIL_SUCCESS,
    payload: detail,
  };
}

export function fetchPokemonDetailFailure(error) {
  return {
    type: FETCH_POKEMON_DETAIL_FAILURE,
    payload: error,
  };
}

/**
 * Fetch Pokemon species data (for flavor text)
 */
export function fetchSpeciesRequest(url) {
  return {
    type: FETCH_SPECIES_REQUEST,
    payload: url,
  };
}

export function fetchSpeciesSuccess(species) {
  return {
    type: FETCH_SPECIES_SUCCESS,
    payload: species,
  };
}

export function fetchSpeciesFailure(error) {
  return {
    type: FETCH_SPECIES_FAILURE,
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
 * Load Pokemon detail
 */
export function loadPokemonDetail(id) {
  return dispatch => {
    dispatch(fetchPokemonDetailRequest(id));
  };
}

/**
 * Load Pokemon species (for flavor text)
 */
export function loadSpecies(url) {
  return dispatch => {
    dispatch(fetchSpeciesRequest(url));
  };
}
