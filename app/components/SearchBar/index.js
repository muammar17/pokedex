/**
 * SearchBar Component
 * Search input field with filter button that opens OverlayPanel
 */

import React, { memo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { InputText } from 'primereact/inputtext';
import { FilterIcon } from 'primereact/icons/filter';
import { OverlayPanel } from 'primereact/overlaypanel';
import FilterPanel from 'components/FilterPanel';

function SearchBar({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeFilter,
  types,
  onClearFilters,
}) {
  const filterPanelRef = useRef(null);
  const [filterVisible, setFilterVisible] = useState(false);

  const handleFilterClick = e => {
    if (filterPanelRef.current) {
      filterPanelRef.current.toggle(e);
    }
    setFilterVisible(!filterVisible);
  };

  const handleSearchChange = e => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        <InputText
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search Pokemon..."
          className="search-input"
        />
        <button
          className="filter-button"
          onClick={handleFilterClick}
          type="button"
          aria-label="Filter by type"
        >
          <FilterIcon className="filter-icon" />
        </button>
      </div>

      {/* Filter OverlayPanel */}
      <OverlayPanel
        ref={filterPanelRef}
        className="filter-overlay-panel"
        dismissable
        showCloseIcon
        closeIcon="pi pi-times"
      >
        <FilterPanel
          types={types}
          selectedType={selectedType}
          onTypeFilter={onTypeFilter}
          onClearFilters={onClearFilters}
        />
      </OverlayPanel>
    </div>
  );
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  selectedType: PropTypes.string,
  onTypeFilter: PropTypes.func.isRequired,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
  onClearFilters: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchQuery: '',
  selectedType: null,
  types: [],
};

export default memo(SearchBar);
