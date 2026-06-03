/* eslint-disable no-unused-vars */
import {
  fetchPokemonRequest,
  fetchPokemonSuccess,
  fetchPokemonFailure,
  fetchTypesRequest,
  fetchTypesSuccess,
  setSearchQuery,
  setTypeFilter,
  clearFilters,
  resetState,
} from '../actions';
import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  FETCH_TYPES_REQUEST,
  FETCH_TYPES_SUCCESS,
  SET_SEARCH_QUERY,
  SET_TYPE_FILTER,
  CLEAR_FILTERS,
  RESET_STATE,
} from '../constants';

describe('PokemonListPage actions', () => {
  describe('fetchPokemonRequest', () => {
    it('has the correct type', () => {
      const expected = {
        type: FETCH_POKEMON_REQUEST,
      };
      expect(fetchPokemonRequest()).toEqual(expected);
    });
  });

  describe('fetchPokemonSuccess', () => {
    it('returns the pokemon and the correct type', () => {
      const pokemon = [{ id: 1, name: 'bulbasaur' }];
      const expected = {
        type: FETCH_POKEMON_SUCCESS,
        payload: pokemon,
      };
      expect(fetchPokemonSuccess(pokemon)).toEqual(expected);
    });
  });

  describe('fetchPokemonFailure', () => {
    it('returns the error and the correct type', () => {
      const error = 'Error message';
      const expected = {
        type: FETCH_POKEMON_FAILURE,
        payload: error,
      };
      expect(fetchPokemonFailure(error)).toEqual(expected);
    });
  });

  describe('fetchTypesRequest', () => {
    it('has the correct type', () => {
      const expected = {
        type: FETCH_TYPES_REQUEST,
      };
      expect(fetchTypesRequest()).toEqual(expected);
    });
  });

  describe('fetchTypesSuccess', () => {
    it('returns the types and the correct type', () => {
      const types = [
        { name: 'fire', url: 'https://pokeapi.co/api/v2/type/fire' },
      ];
      const expected = {
        type: FETCH_TYPES_SUCCESS,
        payload: types,
      };
      expect(fetchTypesSuccess(types)).toEqual(expected);
    });
  });

  describe('setSearchQuery', () => {
    it('returns the query and the correct type', () => {
      const query = 'pikachu';
      const expected = {
        type: SET_SEARCH_QUERY,
        payload: query,
      };
      expect(setSearchQuery(query)).toEqual(expected);
    });
  });

  describe('setTypeFilter', () => {
    it('returns the type and the correct type', () => {
      const type = 'fire';
      const expected = {
        type: SET_TYPE_FILTER,
        payload: type,
      };
      expect(setTypeFilter(type)).toEqual(expected);
    });
  });

  describe('clearFilters', () => {
    it('has the correct type', () => {
      const expected = {
        type: CLEAR_FILTERS,
      };
      expect(clearFilters()).toEqual(expected);
    });
  });

  describe('resetState', () => {
    it('has the correct type', () => {
      const expected = {
        type: RESET_STATE,
      };
      expect(resetState()).toEqual(expected);
    });
  });
});
