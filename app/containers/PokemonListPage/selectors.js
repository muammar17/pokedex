/*
 * PokemonListPage selectors
 * Memoized selectors for accessing state
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pokemonListPage state domain
 */
const selectPokemonListPageDomain = state =>
  state.pokemonListPage || initialState;

/**
 * Select loading state
 */
export const selectLoading = createSelector(
  selectPokemonListPageDomain,
  substate => substate.loading,
);

/**
 * Select error state
 */
export const selectError = createSelector(
  selectPokemonListPageDomain,
  substate => substate.error,
);

/**
 * Select Pokemon list
 */
export const selectPokemonList = createSelector(
  selectPokemonListPageDomain,
  substate => substate.pokemonList,
);

/**
 * Select filtered Pokemon list
 */
export const selectFilteredPokemon = createSelector(
  selectPokemonListPageDomain,
  substate => substate.filteredPokemon,
);

/**
 * Select Pokemon map (for quick lookup)
 */
export const selectPokemonMap = createSelector(
  selectPokemonListPageDomain,
  substate => substate.pokemonMap,
);

/**
 * Select types list
 */
export const selectTypes = createSelector(
  selectPokemonListPageDomain,
  substate => substate.types,
);

/**
 * Select types loading state
 */
export const selectTypesLoading = createSelector(
  selectPokemonListPageDomain,
  substate => substate.typesLoading,
);

/**
 * Select types error
 */
export const selectTypesError = createSelector(
  selectPokemonListPageDomain,
  substate => substate.typesError,
);

/**
 * Select search query
 */
export const selectSearchQuery = createSelector(
  selectPokemonListPageDomain,
  substate => substate.searchQuery,
);

/**
 * Select selected type filter
 */
export const selectSelectedType = createSelector(
  selectPokemonListPageDomain,
  substate => substate.selectedType,
);

/**
 * Select Pokemon detail
 */
export const selectPokemonDetail = createSelector(
  selectPokemonListPageDomain,
  substate => substate.pokemonDetail,
);

/**
 * Select Pokemon detail loading
 */
export const selectPokemonDetailLoading = createSelector(
  selectPokemonListPageDomain,
  substate => substate.pokemonDetailLoading,
);

/**
 * Select Pokemon detail error
 */
export const selectPokemonDetailError = createSelector(
  selectPokemonListPageDomain,
  substate => substate.pokemonDetailError,
);

/**
 * Select pagination state
 */
export const selectOffset = createSelector(
  selectPokemonListPageDomain,
  substate => substate.offset,
);

export const selectHasMore = createSelector(
  selectPokemonListPageDomain,
  substate => substate.hasMore,
);

export const selectLoadingMore = createSelector(
  selectPokemonListPageDomain,
  substate => substate.loadingMore,
);

/**
 * Default selector used by PokemonListPage
 */
const makeSelectPokemonListPage = () =>
  createSelector(
    selectPokemonListPageDomain,
    substate => substate,
  );

export default makeSelectPokemonListPage;
