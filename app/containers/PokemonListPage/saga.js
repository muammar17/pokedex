/*
 * PokemonListPage saga
 * Handles async operations and API calls
 */

import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';
import { pokemonAPI, fetchMultiplePokemon } from 'utils/api';
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
  FETCH_POKEMON_DETAIL_REQUEST,
  FETCH_POKEMON_DETAIL_SUCCESS,
  FETCH_POKEMON_DETAIL_FAILURE,
} from './constants';

const BATCH_SIZE = 10; // Load 10 Pokemon at a time

/**
 * Fetch initial Pokemon list (first batch)
 */
export function* fetchPokemon() {
  try {
    // Get first batch of Pokemon (10 items)
    const response = yield call(pokemonAPI.getPokemonList, BATCH_SIZE, 0);

    // Fetch detailed data for each Pokemon
    const pokemonDetails = yield call(
      fetchMultiplePokemon,
      response.data.results,
    );

    // Transform data
    const formattedPokemon = formatPokemonData(pokemonDetails);

    yield put({
      type: FETCH_POKEMON_SUCCESS,
      payload: formattedPokemon,
    });
  } catch (error) {
    yield put({
      type: FETCH_POKEMON_FAILURE,
      payload: error.message || 'Failed to fetch Pokemon',
    });
  }
}

/**
 * Load more Pokemon (lazy loading)
 */
export function* loadMorePokemon(action) {
  const offset = action.payload;

  try {
    // Get next batch of Pokemon
    const response = yield call(pokemonAPI.getPokemonList, BATCH_SIZE, offset);

    // Fetch detailed data for each Pokemon
    const pokemonDetails = yield call(
      fetchMultiplePokemon,
      response.data.results,
    );

    // Transform data
    const formattedPokemon = formatPokemonData(pokemonDetails);

    yield put({
      type: LOAD_MORE_POKEMON_SUCCESS,
      payload: formattedPokemon,
    });
  } catch (error) {
    yield put({
      type: LOAD_MORE_POKEMON_FAILURE,
      payload: error.message || 'Failed to load more Pokemon',
    });
  }
}

/**
 * Format Pokemon data consistently
 */
function formatPokemonData(pokemonList) {
  return pokemonList.map(pokemon => ({
    id: pokemon.id,
    name: pokemon.name,
    image:
      pokemon.sprites.other['official-artwork'].front_default ||
      pokemon.sprites.front_default,
    sprite: pokemon.sprites.front_default,
    types: pokemon.types,
    height: pokemon.height,
    weight: pokemon.weight,
    stats: pokemon.stats,
    abilities: pokemon.abilities.map(a => a.ability.name),
    baseExperience: pokemon.base_experience,
    species: pokemon.species,
  }));
}

/**
 * Fetch Pokemon types from API
 */
export function* fetchTypes() {
  try {
    const response = yield call(pokemonAPI.getTypes);
    yield put({
      type: FETCH_TYPES_SUCCESS,
      payload: response.data.results,
    });
  } catch (error) {
    yield put({
      type: FETCH_TYPES_FAILURE,
      payload: error.message || 'Failed to fetch types',
    });
  }
}

/**
 * Fetch single Pokemon detail
 */
export function* fetchPokemonDetail(action) {
  try {
    const response = yield call(pokemonAPI.getPokemonById, action.payload);

    const pokemon = {
      id: response.data.id,
      name: response.data.name,
      image:
        response.data.sprites.other['official-artwork'].front_default ||
        response.data.sprites.front_default,
      sprite: response.data.sprites.front_default,
      types: response.data.types,
      height: response.data.height,
      weight: response.data.weight,
      stats: response.data.stats,
      abilities: response.data.abilities.map(a => a.ability.name),
      baseExperience: response.data.base_experience,
      species: response.data.species,
      moves: response.data.moves.slice(0, 10), // Limit moves for performance
    };

    yield put({
      type: FETCH_POKEMON_DETAIL_SUCCESS,
      payload: pokemon,
    });
  } catch (error) {
    yield put({
      type: FETCH_POKEMON_DETAIL_FAILURE,
      payload: error.message || 'Failed to fetch Pokemon detail',
    });
  }
}

/**
 * Watcher for Pokemon list requests
 */
export function* watchFetchPokemon() {
  while (true) {
    yield take(FETCH_POKEMON_REQUEST);
    yield call(fetchPokemon);
  }
}

/**
 * Watcher for types requests
 */
export function* watchFetchTypes() {
  while (true) {
    yield take(FETCH_TYPES_REQUEST);
    yield call(fetchTypes);
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
 * Watcher for load more Pokemon requests
 */
export function* watchLoadMorePokemon() {
  while (true) {
    const action = yield take(LOAD_MORE_POKEMON_REQUEST);
    yield call(loadMorePokemon, action);
  }
}

/**
 * Root saga for PokemonListPage
 * Combines all watchers
 */
export default function* pokemonListPageSaga() {
  const fetchPokemonTask = yield fork(watchFetchPokemon);
  const fetchTypesTask = yield fork(watchFetchTypes);
  const fetchDetailTask = yield fork(watchFetchPokemonDetail);
  const loadMoreTask = yield fork(watchLoadMorePokemon);

  // Wait for location change to cancel tasks
  yield take(LOCATION_CHANGE);

  // Cancel forked tasks
  yield cancel(fetchPokemonTask);
  yield cancel(fetchTypesTask);
  yield cancel(fetchDetailTask);
  yield cancel(loadMoreTask);
}
