/**
 * PokemonDetailImage Component
 * Displays Pokemon image and type badges
 */

import React from 'react';
import PropTypes from 'prop-types';

// Type colors mapping
const typeColors = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
};

export default function PokemonDetailImage({ pokemon }) {
  if (!pokemon) return null;

  const name = pokemon.name;
  const sprites = pokemon.sprite || {};
  const types = pokemon.types || [];

  // Get types
  const pokemonTypes = types.map((type) => type.type.name);

  return (
    <div className="pokemon-detail-image">
      <div className="detail-image-container">
        <img
          src={sprites}
          alt={name}
          className="detail-pokemon-image"
        />
      </div>

      <div className="detail-types">
        {pokemonTypes.map((type) => (
          <span
            key={type}
            className="type-badge"
            style={{
              backgroundColor: typeColors[type.toLowerCase()] || '#777',
            }}
          >
            {type.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}

PokemonDetailImage.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
