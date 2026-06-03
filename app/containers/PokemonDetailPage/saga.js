/*
 * PokemonDetailPage saga
 * Handles async operations and API calls
 */

import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';
import { pokemonAPI, api } from 'utils/api';
import {
  FETCH_POKEMON_DETAIL_REQUEST,
  FETCH_POKEMON_DETAIL_SUCCESS,
  FETCH_POKEMON_DETAIL_FAILURE,
  FETCH_SPECIES_REQUEST,
  FETCH_SPECIES_SUCCESS,
  FETCH_SPECIES_FAILURE,
} from './constants';

/**
 * Fetch Pokemon detail from API
 */
export function* fetchPokemonDetail(action) {
  try {
    const response = yield call(pokemonAPI.getPokemonById, action.payload);

    const pokemon = {
      id: response.data.id,
      name: response.data.name,
      // Use official artwork for high quality
      image:
        response.data.sprites.other['official-artwork'].front_default ||
        response.data.sprites.front_default,
      sprite: response.data.sprites.front_default,
      types: response.data.types,
      height: response.data.height,
      weight: response.data.weight,
      stats: response.data.stats.map(stat => ({
        name: stat.stat.name,
        baseStat: stat.base_stat,
      })),
      abilities: response.data.abilities.map(a => a.ability.name),
      baseExperience: response.data.base_experience,
      species: response.data.species,
    };

    yield put({
      type: FETCH_POKEMON_DETAIL_SUCCESS,
      payload: pokemon,
    });

    // After fetching Pokemon, fetch species data for flavor text
    if (pokemon.species && pokemon.species.url) {
      yield put({
        type: FETCH_SPECIES_REQUEST,
        payload: pokemon.species.url,
      });
    }
  } catch (error) {
    yield put({
      type: FETCH_POKEMON_DETAIL_FAILURE,
      payload: error.message || 'Failed to fetch Pokemon detail',
    });
  }
}

/**
 * Fetch Pokemon species data (for flavor text)
 */
export function* fetchSpecies(action) {
  try {
    const url = action.payload.replace('https://pokeapi.co/api/v2/', '');
    const response = yield call(api.get, url);

    // Find English flavor text
    const englishEntry =
      response.data.flavor_text_entries &&
      response.data.flavor_text_entries.find(
        entry => entry.language.name === 'en'
      );

    const species = {
      name: response.data.name,
      flavorText: englishEntry
        ? englishEntry.flavor_text.replace(/\f/g, ' ')
        : 'No description available.',
      genus: response.data.genera && response.data.genera[7]
        ? response.data.genera[7].genus
        : '',
    };

    yield put({
      type: FETCH_SPECIES_SUCCESS,
      payload: species,
    });
  } catch (error) {
    yield put({
      type: FETCH_SPECIES_FAILURE,
      payload: error.message || 'Failed to fetch species data',
    });
  }
}

/**
 * Watcher for Pokemon detail requests
 */
export function* watchFetchPokemonDetail() {
  while (true) {
    const action = yield take(FETCH_POKEMON_DETAIL_REQUEST);
    yield call(fetchPokemonDetail, action);
  }
}

/**
 * Watcher for species requests
 */
export function* watchFetchSpecies() {
  while (true) {
    const action = yield take(FETCH_SPECIES_REQUEST);
    yield call(fetchSpecies, action);
  }
}

/**
 * Root saga for PokemonDetailPage
 * Combines all watchers
 */
export default function* pokemonDetailPageSaga() {
  const fetchDetailTask = yield fork(watchFetchPokemonDetail);
  const fetchSpeciesTask = yield fork(watchFetchSpecies);

  // Wait for location change to cancel tasks
  yield take(LOCATION_CHANGE);

  // Cancel forked tasks
  yield cancel(fetchDetailTask);
  yield cancel(fetchSpeciesTask);
}
