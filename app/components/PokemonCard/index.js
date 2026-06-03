/**
 * PokemonCard Component
 * Individual Pokemon card with image, number, name, and type
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Type color mapping
const TYPE_COLORS = {
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

// Format Pokemon number with leading zeros
const formatPokemonNumber = number => `#${number.toString().padStart(3, '0')}`;

// Capitalize first letter
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

function PokemonCard({ pokemon, onClick }) {
  const { id, name, image, types } = pokemon;

  const handleClick = () => {
    if (onClick) {
      onClick(pokemon);
    }
  };

  return (
    <div
      className="pokemon-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {/* Pokemon Number */}
      <div className="pokemon-number">{formatPokemonNumber(id)}</div>

      {/* Pokemon Image */}
      <div className="pokemon-image-wrapper">
        <img src={image} alt={name} className="pokemon-image" loading="lazy" />
      </div>

      {/* Pokemon Name */}
      <div className="pokemon-name">{capitalize(name)}</div>

      {/* Pokemon Type(s) */}
      <div className="pokemon-types">
        {types &&
          types.map((typeInfo, index) => (
            <div
              key={index}
              className="pokemon-type-badge"
              style={{
                backgroundColor: TYPE_COLORS[typeInfo.type.name] || '#A8A878',
              }}
            >
              {capitalize(typeInfo.type.name)}
            </div>
          ))}
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }),
      }),
    ),
  }).isRequired,
  onClick: PropTypes.func,
};

PokemonCard.defaultProps = {
  onClick: null,
};

export default memo(PokemonCard);
