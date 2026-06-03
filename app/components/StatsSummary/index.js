/**
 * StatsSummary Component
 * Displays Pokemon physical stats summary (height, weight, abilities)
 */

import React from 'react';
import PropTypes from 'prop-types';

export default function StatsSummary({ pokemon }) {
  if (!pokemon) return null;

  const height = pokemon.height;
  const weight = pokemon.weight;
  const abilities = pokemon.abilities || [];

  // Format height (decimeters to feet/inches or m)
  const formatHeight = (h) => {
    if (!h) return 'Unknown';
    const meters = h / 10;
    const feet = Math.floor(meters * 3.28084);
    const inches = Math.round((meters * 3.28084 - feet) * 12);
    return `${feet}'${inches}" (${meters}m)`;
  };

  // Format weight (hectograms to kg/lbs)
  const formatWeight = (w) => {
    if (!w) return 'Unknown';
    const kg = w / 10;
    const lbs = (kg * 2.20462).toFixed(1);
    return `${kg}kg (${lbs}lbs)`;
  };

  // Get abilities
  const pokemonAbilities = abilities.map((ability) => ability);

  return (
    <div className="stats-summary">
      <div className="summary-item">
        <span className="summary-label">Height</span>
        <span className="summary-value">{formatHeight(height)}</span>
      </div>

      <div className="summary-item">
        <span className="summary-label">Weight</span>
        <span className="summary-value">{formatWeight(weight)}</span>
      </div>

      <div className="summary-item">
        <span className="summary-label">Abilities</span>
        <div className="abilities-list">
          {pokemonAbilities.map((ability) => (
            <span key={ability} className="ability-badge">
              {ability.replace('-', ' ').toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

StatsSummary.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
