/*
 * PokemonDetailPage reducer
 * Manages state for Pokemon detail page
 */

import produce from 'immer';
import {
  FETCH_POKEMON_DETAIL_REQUEST,
  FETCH_POKEMON_DETAIL_SUCCESS,
  FETCH_POKEMON_DETAIL_FAILURE,
  FETCH_SPECIES_REQUEST,
  FETCH_SPECIES_SUCCESS,
  FETCH_SPECIES_FAILURE,
  RESET_STATE,
} from './constants';

export const initialState = {
  // Pokemon detail data
  pokemon: null,

  // Species data (for flavor text)
  species: null,

  // Loading states
  loading: false,
  loadingSpecies: false,

  // Error states
  error: null,
  speciesError: null,
};

/* eslint-disable default-case, no-param-reassign, consistent-return */
const pokemonDetailPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_POKEMON_DETAIL_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;

      case FETCH_POKEMON_DETAIL_SUCCESS:
        draft.loading = false;
        draft.pokemon = action.payload;
        break;

      case FETCH_POKEMON_DETAIL_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;

      case FETCH_SPECIES_REQUEST:
        draft.loadingSpecies = true;
        draft.speciesError = null;
        break;

      case FETCH_SPECIES_SUCCESS:
        draft.loadingSpecies = false;
        draft.species = action.payload;
        break;

      case FETCH_SPECIES_FAILURE:
        draft.loadingSpecies = false;
        draft.speciesError = action.payload;
        break;

      case RESET_STATE:
        return initialState;

      default:
        return draft;
    }
  }) || state;

export default pokemonDetailPageReducer;
