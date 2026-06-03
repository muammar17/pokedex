/**
 * Header Component
 * Top navigation bar with "POKEDEX" title and search icon
 */

import React, { memo } from 'react';
import { Search } from 'primereact/icons/search';

function Header() {
  return (
    <header className="pokemon-header">
      <div className="d-flex justify-content-between align-items-center py-3 px-3">                             
      <h1 className="pokemon-title m-0">POKEDEX</h1>   
        {/* <div className="header-icon">
          <Search className="search-icon" />
        </div> */}
      </div>
    </header>
  );
}

export default memo(Header);
