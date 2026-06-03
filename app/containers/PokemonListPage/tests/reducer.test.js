import pokemonListPageReducer, { initialState } from '../reducer';
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

/* eslint-disable default-case, no-param-reassign */
describe('pokemonListPageReducer', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    expect(pokemonListPageReducer(undefined, {})).toEqual(state);
  });

  it('should handle FETCH_POKEMON_REQUEST', () => {
    const expectedResult = {
      ...state,
      loading: true,
      error: null,
    };
    expect(
      pokemonListPageReducer(state, { type: FETCH_POKEMON_REQUEST }),
    ).toEqual(expectedResult);
  });

  it('should handle FETCH_POKEMON_SUCCESS', () => {
    const pokemon = [
      { id: 1, name: 'bulbasaur', types: [{ type: { name: 'grass' } }] },
    ];
    const expectedResult = {
      ...state,
      loading: false,
      pokemonList: pokemon,
      pokemonMap: { 1: pokemon[0] },
      filteredPokemon: pokemon,
    };
    expect(
      pokemonListPageReducer(state, {
        type: FETCH_POKEMON_SUCCESS,
        payload: pokemon,
      }),
    ).toEqual(expectedResult);
  });

  it('should handle FETCH_POKEMON_FAILURE', () => {
    const error = 'Error loading Pokemon';
    const expectedResult = {
      ...state,
      loading: false,
      error,
    };
    expect(
      pokemonListPageReducer(state, {
        type: FETCH_POKEMON_FAILURE,
        payload: error,
      }),
    ).toEqual(expectedResult);
  });

  it('should handle SET_SEARCH_QUERY', () => {
    const pokemon = [
      { id: 1, name: 'bulbasaur', types: [{ type: { name: 'grass' } }] },
      { id: 2, name: 'charmander', types: [{ type: { name: 'fire' } }] },
    ];
    const query = 'bulba';
    const stateWithPokemon = {
      ...state,
      pokemonList: pokemon,
      filteredPokemon: pokemon,
    };
    const expectedResult = {
      ...stateWithPokemon,
      searchQuery: query,
      filteredPokemon: [pokemon[0]],
    };
    expect(
      pokemonListPageReducer(stateWithPokemon, {
        type: SET_SEARCH_QUERY,
        payload: query,
      }),
    ).toEqual(expectedResult);
  });

  it('should handle RESET_STATE', () => {
    const modifiedState = {
      ...state,
      loading: true,
      error: 'Some error',
    };
    expect(
      pokemonListPageReducer(modifiedState, { type: RESET_STATE }),
    ).toEqual(initialState);
  });
});
