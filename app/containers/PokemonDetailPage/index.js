/**
 * PokemonDetailPage Container
 * Main page container for Pokemon detail with Redux integration
 */

import React, { memo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Components
import Header from 'components/Header';
import Navbar from 'components/Navbar';
import PokemonDetailImage from 'components/PokemonDetailImage';
import PokemonDetailSkeleton from 'components/PokemonDetailSkeleton';
import StatsSummary from 'components/StatsSummary';
import BaseStatsTable from 'components/BaseStatsTable';
import EntryDetail from 'components/EntryDetail';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  fetchPokemonDetailRequest,
  resetState,
} from './actions';
import {
  selectPokemon,
  selectSpecies,
  selectLoading,
  selectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'pokemonDetailPage';

export function PokemonDetailPage({
  pokemon,
  species,
  loading,
  error,
  onLoadDetail,
  onReset,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // Get Pokemon ID from URL
  const getPokemonId = useCallback(() => {
    const pathParts = window.location.pathname.split('/');
    return parseInt(pathParts[pathParts.length - 1], 10);
  }, []);

  // Load Pokemon detail on mount
  useEffect(() => {
    const pokemonId = getPokemonId();
    if (pokemonId) {
      onLoadDetail(pokemonId);
    }

    // Reset state when unmounting
    return () => {
      onReset();
    };
  }, []);

  // Show loading state
  if (loading) {
    return (
      <>
        <Helmet>
          <title>POKÉMON - Pokédex</title>
        </Helmet>
        <div className="pokemon-detail-page">
          <div className="mobile-container">
            <Header />
            <PokemonDetailSkeleton />
            <Navbar />
          </div>
        </div>
      </>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="pokemon-detail-page">
        <Helmet>
          <title>Error - Pokédex</title>
        </Helmet>
        <div className="mobile-container">
          <Header />
          <div className="error-container">
            <div className="error-message">
              Error: {error}. Please try again.
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    );
  }

  // Show Pokemon detail
  return (
    <div className="pokemon-detail-page">
      <Helmet>
        <title>{pokemon ? pokemon.name.toUpperCase() : 'Pokémon'} - Pokédex</title>
        <meta
          name="description"
          content={`Details about ${pokemon ? pokemon.name : 'Pokemon'}`}
        />
      </Helmet>

      <div className="mobile-container">
        {/* Header */}
        <Header />

        {/* Pokemon Detail Content */}
        <div className="pokemon-detail-content">
          {pokemon && (
            <>
              {/* Detail Header */}
              <div className="detail-header">
                <h2 className="detail-name">{pokemon.name}</h2>
                <span className="detail-number">#{String(pokemon.id).padStart(3, '0')}</span>
              </div>

              {/* Pokemon Image and Type */}
              <PokemonDetailImage pokemon={pokemon} />

              {/* Stats Summary */}
              <StatsSummary pokemon={pokemon} />

              {/* Base Stats Table */}
              <BaseStatsTable stats={pokemon.stats} />

              {/* Entry Detail */}
              {species && <EntryDetail species={species} />}
            </>
          )}
        </div>

        {/* Bottom Navigation */}
        <Navbar />
      </div>
    </div>
  );
}

PokemonDetailPage.propTypes = {
  pokemon: PropTypes.object,
  species: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onLoadDetail: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

PokemonDetailPage.defaultProps = {
  pokemon: null,
  species: null,
  error: null,
};

const mapStateToProps = createStructuredSelector({
  pokemon: selectPokemon,
  species: selectSpecies,
  loading: selectLoading,
  error: selectError,
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadDetail: id => dispatch(fetchPokemonDetailRequest(id)),
    onReset: () => dispatch(resetState()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect, memo)(PokemonDetailPage);
