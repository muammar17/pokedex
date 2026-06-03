/**
 * FilterPanel Component
 * Content for the OverlayPanel - displays Pokemon type filters
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

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

// Type icons (emoji for simplicity)
const TYPE_ICONS = {
  normal: '⚪',
  fire: '🔥',
  water: '💧',
  electric: '⚡',
  grass: '🌿',
  ice: '❄️',
  fighting: '👊',
  poison: '☠️',
  ground: '🌍',
  flying: '🦅',
  psychic: '🔮',
  bug: '🐛',
  rock: '🪨',
  ghost: '👻',
  dragon: '🐉',
  dark: '🌑',
  steel: '⚙️',
  fairy: '✨',
};

function FilterPanel({ types, selectedType, onTypeFilter, onClearFilters }) {
  const [tempSelectedType, setTempSelectedType] = useState(selectedType || null);

  // Update temp value when selectedType prop changes
  React.useEffect(() => {
    setTempSelectedType(selectedType || null);
  }, [selectedType]);

  const handleApplyFilter = () => {
    onTypeFilter(tempSelectedType);
  };

  const handleClearAll = () => {
    setTempSelectedType(null);
    onClearFilters();
  };

  // Sort types alphabetically and create dropdown options
  const sortedTypes = [...types].sort((a, b) => a.name.localeCompare(b.name));

  const typeOptions = sortedTypes.map(type => ({
    label: `${TYPE_ICONS[type.name] || '•'} ${type.name.charAt(0).toUpperCase() + type.name.slice(1)}`,
    value: type.name,
  }));

  return (
    <div className="filter-panel">
      <div className="filter-panel-header">
        <h5 className="filter-panel-title">Filter by Type</h5>
        {selectedType && (
          <button
            className="clear-filters-button"
            onClick={handleClearAll}
            type="button"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="filter-panel-content">
        {sortedTypes.length > 0 ? (
          <div className="type-filters-dropdown">
            <label htmlFor="type-dropdown" className="type-select-label">
              Select Pokemon Type:
            </label>
            <Dropdown
              id="type-dropdown"
              value={tempSelectedType}
              options={typeOptions}
              onChange={e => setTempSelectedType(e.value)}
              placeholder="All Types"
              className="type-dropdown"
              panelClassName="type-dropdown-panel"
              showClear
            />
            <Button
              label="Apply Filter"
              onClick={handleApplyFilter}
              className="apply-filter-button"
              disabled={tempSelectedType === selectedType}
            />
          </div>
        ) : (
          <div className="loading-types">Loading types...</div>
        )}
      </div>
    </div>
  );
}

FilterPanel.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedType: PropTypes.string,
  onTypeFilter: PropTypes.func.isRequired,
  onClearFilters: PropTypes.func.isRequired,
};

FilterPanel.defaultProps = {
  selectedType: null,
};

export default memo(FilterPanel);
