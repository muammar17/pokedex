/*
 * PokemonDetailPage selectors
 * Memoized selectors for accessing state
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pokemonDetailPage state domain
 */
const selectPokemonDetailPageDomain = state =>
  state.pokemonDetailPage || initialState;

/**
 * Select Pokemon detail
 */
export const selectPokemon = createSelector(
  selectPokemonDetailPageDomain,
  substate => substate.pokemon,
);

/**
 * Select Pokemon species
 */
export const selectSpecies = createSelector(
  selectPokemonDetailPageDomain,
  substate => substate.species,
);

/**
 * Select loading state
 */
export const selectLoading = createSelector(
  selectPokemonDetailPageDomain,
  substate => substate.loading,
);

/**
 * Select species loading state
 */
export const selectLoadingSpecies = createSelector(
  selectPokemonDetailPageDomain,
  substate => substate.loadingSpecies,
);

/**
 * Select error state
 */
export const selectError = createSelector(
  selectPokemonDetailPageDomain,
  substate => substate.error,
);

/**
 * Select species error
 */
export const selectSpeciesError = createSelector(
  selectPokemonDetailPageDomain,
  substate => substate.speciesError,
);

/**
 * Default selector used by PokemonDetailPage
 */
const makeSelectPokemonDetailPage = () =>
  createSelector(
    selectPokemonDetailPageDomain,
    substate => substate,
  );

export default makeSelectPokemonDetailPage;
export { selectPokemonDetailPageDomain };
