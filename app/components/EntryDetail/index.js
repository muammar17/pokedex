/**
 * EntryDetail Component
 * Displays Pokemon description/entry from species data
 */

import React from 'react';
import PropTypes from 'prop-types';

export default function EntryDetail(props) {
  const species = props.species;
  
  if (!species) return null;
  
  // Get flavor text entries (English only)
  const flavorTextEntries = species.flavorText || [];

  // Get description
  const description = flavorTextEntries ? flavorTextEntries : 'No description available.';

  // Get genus (e.g., "Seed Pokémon")
  const genera = species.genera || [];
  const genusObj = genera.find((g) => g.language.name === 'en');
  const genus = genusObj ? genusObj.genus : '';

  // Get generation
  const generation = species.generation ? species.generation.name : null;

  // Get growth rate
  const growthRate = species.growth_rate ? species.growth_rate.name : null;

  // Clean up description (remove form feeds, extra whitespace)
  const cleanDescription = description
    .replace(/\f/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return (
    <div className="entry-detail">
      <h3 className="entry-title">Pokémon Data</h3>

      {genus && (
        <div className="entry-genus">
          <span className="genus-label">Category:</span>
          <span className="genus-value">{genus}</span>
        </div>
      )}

      <div className="entry-description">
        <p>{cleanDescription}</p>
      </div>

      {/* Generation Info */}
      {generation && (
        <div className="entry-generation">
          <span className="generation-label">Generation:</span>
          <span className="generation-value">
            {generation.toUpperCase().replace('-', ' ')}
          </span>
        </div>
      )}

      {/* Growth Rate */}
      {growthRate && (
        <div className="entry-growth-rate">
          <span className="growth-rate-label">Growth Rate:</span>
          <span className="growth-rate-value">
            {growthRate.replace('-', ' ').toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );
}

EntryDetail.propTypes = {
  species: PropTypes.object.isRequired,
};
