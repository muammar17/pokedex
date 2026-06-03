/**
 * PokemonListPage Container
 * Main page container for Pokemon list with Redux integration
 */

import React, { memo, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Components
import Header from 'components/Header';
import Navbar from 'components/Navbar';
import PokemonCard from 'components/PokemonCard';
import PokemonCardSkeleton from 'components/PokemonCardSkeleton';
import SearchBar from 'components/SearchBar';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  fetchPokemonRequest,
  fetchTypesRequest,
  setSearchQuery,
  setTypeFilter,
  clearFilters,
  loadMorePokemonRequest,
} from './actions';
import {
  selectLoading,
  selectError,
  selectFilteredPokemon,
  selectTypes,
  selectSearchQuery,
  selectSelectedType,
  selectHasMore,
  selectLoadingMore,
  selectOffset,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'pokemonListPage';

export function PokemonListPage({
  loading,
  error,
  filteredPokemon,
  types,
  searchQuery,
  selectedType,
  hasMore,
  loadingMore,
  offset,
  onLoadPokemon,
  onLoadTypes,
  onSearch,
  onFilterByType,
  onClearFilters,
  onLoadMore,
}) {
  const contentRef = useRef(null);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // Load Pokemon and types on mount
  useEffect(() => {
    onLoadPokemon();
    onLoadTypes();
  }, []);

  // Handle scroll for lazy loading
  const handleScroll = useCallback(() => {
    if (!contentRef.current) return;

    const target = contentRef.current;
    const scrollHeight = target.scrollHeight;
    const scrollTop = target.scrollTop;
    const clientHeight = target.clientHeight;

    // Load more when user scrolls near bottom (150px from bottom)
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

    if (
      hasMore &&
      !loadingMore &&
      !loading &&
      distanceFromBottom < 150 &&
      distanceFromBottom > 0
    ) {
      onLoadMore(offset);
    }
  }, [hasMore, loadingMore, loading, offset, onLoadMore]);

  // Attach scroll event listener
  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    contentElement.addEventListener('scroll', handleScroll);

    return () => {
      contentElement.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Handle search
  const handleSearchChange = useCallback(
    query => {
      onSearch(query);
    },
    [onSearch],
  );

  // Handle type filter
  const handleTypeFilter = useCallback(
    type => {
      onFilterByType(type);
    },
    [onFilterByType],
  );

  // Handle card click (navigate to detail page)
  const handleCardClick = useCallback(pokemon => {
    if (pokemon && pokemon.id) {
      window.location.href = `/pokemon/${pokemon.id}`;
    }
  }, []);

  return (
    <div className="pokemon-list-page">
      <Helmet>
        <title>Pokédex</title>
        <meta name="description" content="Pokédex - Pokemon List Application" />
      </Helmet>

      {/* Mobile Container */}
      <div className="mobile-container">
        {/* Header */}
        <Header />

        {/* Search Bar */}
        <div className="search-section">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            selectedType={selectedType}
            onTypeFilter={handleTypeFilter}
            types={types}
            onClearFilters={onClearFilters}
          />
        </div>

        {/* Pokemon List Grid */}
        <div className="pokemon-content" ref={contentRef}>
          {loading && (
            <div className="pokemon-grid">
              <PokemonCardSkeleton count={12} />
            </div>
          )}

          {error && (
            <div className="error-container">
              <div className="error-message">
                Error: {error}. Please try again.
              </div>
            </div>
          )}

          {!loading && !error && (
            <>
              {filteredPokemon.length === 0 ? (
                <div className="no-results">
                  <div className="no-results-message">
                    No Pokemon found matching your criteria.
                  </div>
                </div>
              ) : (
                <>
                  <div className="pokemon-grid">
                    {filteredPokemon.map(pokemon => (
                      <div key={pokemon.id} className="pokemon-grid-item">
                        <PokemonCard
                          pokemon={pokemon}
                          onClick={handleCardClick}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Loading more indicator */}
                  {loadingMore && (
                    <div className="pokemon-grid">
                      <PokemonCardSkeleton count={6} />
                    </div>
                  )}

                  {/* End of list message */}
                  {!hasMore && filteredPokemon.length > 0 && (
                    <div className="end-of-list">
                      <div className="end-of-list-message">
                        You've caught all 151 Pokemon!
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>

        {/* Bottom Navigation */}
        <Navbar />
      </div>
    </div>
  );
}

PokemonListPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  filteredPokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      types: PropTypes.array,
    }),
  ).isRequired,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  searchQuery: PropTypes.string.isRequired,
  selectedType: PropTypes.string,
  hasMore: PropTypes.bool.isRequired,
  loadingMore: PropTypes.bool.isRequired,
  offset: PropTypes.number.isRequired,
  onLoadPokemon: PropTypes.func.isRequired,
  onLoadTypes: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onFilterByType: PropTypes.func.isRequired,
  onClearFilters: PropTypes.func.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};

PokemonListPage.defaultProps = {
  error: null,
  selectedType: null,
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  error: selectError,
  filteredPokemon: selectFilteredPokemon,
  types: selectTypes,
  searchQuery: selectSearchQuery,
  selectedType: selectSelectedType,
  hasMore: selectHasMore,
  loadingMore: selectLoadingMore,
  offset: selectOffset,
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPokemon: () => dispatch(fetchPokemonRequest()),
    onLoadTypes: () => dispatch(fetchTypesRequest()),
    onSearch: query => dispatch(setSearchQuery(query)),
    onFilterByType: type => dispatch(setTypeFilter(type)),
    onClearFilters: () => dispatch(clearFilters()),
    onLoadMore: offset => dispatch(loadMorePokemonRequest(offset)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PokemonListPage);
