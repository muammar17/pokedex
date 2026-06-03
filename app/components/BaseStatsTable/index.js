/**
 * BaseStatsTable Component
 * Displays Pokemon base stats in a table format with visual bars
 */

import React from 'react';
import PropTypes from 'prop-types';

// Stat names mapping
const statNames = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  'special-attack': 'SP.ATK',
  'special-defense': 'SP.DEF',
  speed: 'SPD',
};

// Stat colors
const statColors = {
  hp: '#FF5959',
  attack: '#F5AC78',
  defense: '#FAE078',
  'special-attack': '#9DB7F5',
  'special-defense': '#A7DB8D',
  speed: '#FA92B2',
};

export default function BaseStatsTable(props) {
  const stats = props.stats;

  if (!stats || !Array.isArray(stats)) {
    return null;
  }

  // Calculate max value for percentage (max base stat is usually around 255)
  const maxStatValue = 200;

  // Calculate total stats
  const totalStats = stats.reduce((sum, stat) => sum + stat.baseStat, 0);

  return (
    <div className="base-stats-table">
      <div className="stats-header">
        <h3 className="stats-title">Base Stats</h3>
        <span className="stats-total">TOTAL: {totalStats}</span>
      </div>

      <div className="stats-table-container">
        {stats.map((stat) => {
          const statName = stat.name;
          const statValue = stat.baseStat;
          const displayName = statNames[statName] || statName.toUpperCase();
          const percentage = (statValue / maxStatValue) * 100;
          const color = statColors[statName] || '#777';

          return (
            <div key={statName} className="stat-row">
              <span className="stat-name">{displayName}</span>
              <span className="stat-value">{statValue}</span>
              <div className="stat-bar-container">
                <div
                  className="stat-bar"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

BaseStatsTable.propTypes = {
  stats: PropTypes.array.isRequired,
};
