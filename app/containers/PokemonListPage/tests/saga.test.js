/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects, no-unused-vars */
import { take, call } from 'redux-saga/effects';
import { pokemonAPI } from 'utils/api';
import pokemonListPageSaga, { fetchPokemon, fetchTypes } from '../saga';
import { FETCH_POKEMON_REQUEST, FETCH_TYPES_REQUEST } from '../constants';

describe('pokemonListPageSaga Saga', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(false);
  });

  describe('fetchPokemon', () => {
    const generator = fetchPokemon();

    it('should call the getPokemonList API', () => {
      const callDescriptor = generator.next().value;
      expect(callDescriptor).toEqual(call(pokemonAPI.getPokemonList, 151, 0));
    });
  });

  describe('fetchTypes', () => {
    const generator = fetchTypes();

    it('should call the getTypes API', () => {
      const callDescriptor = generator.next().value;
      expect(callDescriptor).toEqual(call(pokemonAPI.getTypes));
    });
  });

  describe('pokemonListPageSaga', () => {
    const generator = pokemonListPageSaga();

    it('should start watching for FETCH_POKEMON_REQUEST', () => {
      const takeDescriptor = generator.next().value;
      expect(takeDescriptor).toEqual(take(FETCH_POKEMON_REQUEST));
    });
  });
});
