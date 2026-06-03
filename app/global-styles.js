import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f5f5f5;
    min-height: 100%;
    width: 100%;
  }

  /* Mobile Container - Force mobile view */
  .mobile-container {
    width: 100%;
    max-width: 414px;
    min-height: 100vh;
    background-color: #ffffff;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
  }

  /* Pokemon List Page */
  .pokemon-list-page {
    width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
  }

  /* Header Styles */
  .pokemon-header {
    background-color: #ffffff;
    border-bottom: 1px solid #e0e0e0;
  }

  .pokemon-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333333;
    letter-spacing: 2px;
  }

  .search-icon {
    width: 20px;
    height: 20px;
    color: #666666;
    cursor: pointer;
  }

  /* Search Bar Section */
  .search-section {
    padding: 1rem;
    background-color: #ffffff;
    border-bottom: 1px solid #e0e0e0;
  }

  .search-bar-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .search-input {
    flex: 1;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    background-color: #f5f5f5;
    width: 100%;
  }

  .search-input:focus {
    outline: none;
    border-color: #ff0000;
    background-color: #ffffff;
  }

  .filter-button {
    background-color: #f5f5f5;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 0.75rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .filter-button:hover {
    background-color: #e0e0e0;
  }

  .filter-icon {
    width: 16px;
    height: 16px;
    color: #666666;
  }

  /* Pokemon Content */
  .pokemon-content {
    flex: 1;
    overflow-y: auto;
    background-color: #ffffff;
    max-height: calc(100vh - 180px); /* Header + Search + Navbar height deduction */
    min-height: 300px;
  }

  /* Pokemon Grid */
  .pokemon-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem;
  }

  .pokemon-grid-item {
    display: flex;
  }

  /* Pokemon Card */
  .pokemon-card {
    flex: 1;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 0.75rem;
    position: relative;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 160px;
  }

  .pokemon-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .pokemon-card:active {
    transform: scale(0.98);
  }

  .pokemon-number {
    position: absolute;
    top: 0.5rem;
    left: 0.75rem;
    font-size: 0.7rem;
    color: #999999;
    font-weight: 600;
  }

  .pokemon-image-wrapper {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
  }

  .pokemon-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    image-rendering: pixelated;
  }

  .pokemon-name {
    font-size: 0.85rem;
    font-weight: 600;
    color: #333333;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }

  .pokemon-types {
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pokemon-type-badge {
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.65rem;
    font-weight: 600;
    color: #ffffff;
    text-transform: capitalize;
    white-space: nowrap;
  }

  /* Navbar Styles */
  .pokemon-navbar {
    background-color: #f8f8f8;
    border-top: 1px solid #e0e0e0;
    position: sticky;
    bottom: 0;
    z-index: 100;
  }

  .navbar-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 0;
  }

  .navbar-tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: opacity 0.2s;
  }

  .navbar-tab:active {
    opacity: 0.7;
  }

  .navbar-icon-wrapper {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.25rem;
  }

  .navbar-icon {
    font-size: 1.25rem;
    color: #999999;
    transition: color 0.2s;
  }

  .navbar-icon.active {
    color: #ff0000;
  }

  .navbar-icon.pi {
    margin: 0;
  }

  .navbar-label {
    font-size: 0.7rem;
    color: #999999;
    font-weight: 500;
    transition: color 0.2s;
  }

  .navbar-label.active {
    color: #ff0000;
  }

  /* Filter Panel */
  .filter-overlay-panel {
    min-width: 300px !important;
  }

  .filter-panel {
    padding: 1rem;
  }

  .filter-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .filter-panel-title {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: #333333;
  }

  .clear-filters-button {
    background: none;
    border: none;
    color: #ff0000;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
  }

  .clear-filters-button:hover {
    text-decoration: underline;
  }

  .type-filters-dropdown {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .type-select-label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #333333;
  }

  .type-dropdown {
    width: 100%;
  }

  .apply-filter-button {
    width: 100%;
    background-color: #ff0000;
    border: none;
    padding: 0.75rem;
    font-weight: 600;
  }

  .apply-filter-button:hover {
    background-color: #cc0000;
  }

  .apply-filter-button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  .type-dropdown-panel {
    max-height: 300px;
  }

  .type-dropdown-panel .p-dropdown-item {
    padding: 0.75rem 1rem;
  }

  .loading-types {
    text-align: center;
    color: #999999;
    font-size: 0.9rem;
    padding: 1rem;
  }

  /* Loading and Error States */
  .loading-container,
  .error-container,
  .no-results {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    padding: 2rem;
  }

  .loading-spinner,
  .error-message,
  .no-results-message {
    text-align: center;
    color: #999999;
    font-size: 0.9rem;
  }

  .error-message {
    color: #ff0000;
  }

  /* Loading More Indicator */
  .loading-more-container,
  .end-of-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }

  .loading-more-spinner,
  .end-of-list-message {
    text-align: center;
    color: #999999;
    font-size: 0.85rem;
  }

  .end-of-list-message {
    color: #666666;
    font-weight: 500;
  }

  /* Scrollbar Styling */
  .pokemon-content::-webkit-scrollbar {
    width: 4px;
  }

  .pokemon-content::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .pokemon-content::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 2px;
  }

  .pokemon-content::-webkit-scrollbar-thumb:hover {
    background: #999999;
  }

  /* Pokemon Detail Page */
  .pokemon-detail-page {
    width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
  }

  .pokemon-detail-content {
    flex: 1;
    overflow-y: auto;
    background-color: #ffffff;
    max-height: calc(100vh - 120px); /* Header + Navbar height deduction */
    padding-bottom: 1rem;
  }

  .pokemon-detail-content::-webkit-scrollbar {
    width: 4px;
  }

  .pokemon-detail-content::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .pokemon-detail-content::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 2px;
  }

  /* Detail Header */
  .detail-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem 0.5rem;
    background-color: #ffffff;
  }

  .detail-name {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333333;
    margin: 0;
    text-transform: capitalize;
  }

  .detail-number {
    font-size: 1rem;
    color: #999999;
    font-weight: 600;
    margin-left: 0.5rem;
  }

  /* Pokemon Detail Image */
  .pokemon-detail-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .detail-image-container {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .detail-pokemon-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    image-rendering: pixelated;
  }

  .detail-types {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .type-badge {
    padding: 0.5rem 1rem;
    border-radius: 16px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #ffffff;
    text-transform: capitalize;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Stats Summary */
  .stats-summary {
    padding: 1.5rem;
    background-color: #f8f8f8;
    margin: 1rem;
    border-radius: 12px;
  }

  .summary-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid #e0e0e0;
  }

  .summary-item:last-child {
    border-bottom: none;
  }

  .summary-label {
    font-size: 0.9rem;
    color: #666666;
    font-weight: 500;
  }

  .summary-value {
    font-size: 0.9rem;
    color: #333333;
    font-weight: 600;
  }

  .abilities-list {
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
  }

  .ability-badge {
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    font-size: 0.7rem;
    font-weight: 600;
    background-color: #e0e0e0;
    color: #333333;
  }

  /* Base Stats Table */
  .base-stats-table {
    padding: 1.5rem;
    margin: 1rem;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
  }

  .stats-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .stats-title {
    font-size: 1.1rem;
    font-weight: bold;
    color: #333333;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .stats-total {
    font-size: 1rem;
    font-weight: bold;
    color: #666666;
  }

  .stats-table-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .stat-row {
    display: grid;
    grid-template-columns: 70px 40px 1fr;
    align-items: center;
    gap: 0.5rem;
  }

  .stat-name {
    font-size: 0.8rem;
    font-weight: 600;
    color: #666666;
    text-align: left;
  }

  .stat-value {
    font-size: 0.8rem;
    font-weight: 600;
    color: #333333;
    text-align: right;
  }

  .stat-bar-container {
    height: 8px;
    background-color: #f0f0f0;
    border-radius: 4px;
    overflow: hidden;
  }

  .stat-bar {
    height: 100%;
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  .stat-bar-total {
    width: 0;
  }

  .total-row {
    border-top: 1px solid #e0e0e0;
    padding-top: 0.75rem;
    margin-top: 0.25rem;
  }

  .total-row .stat-name,
  .total-row .stat-value {
    font-weight: bold;
    color: #333333;
  }

  /* Entry Detail */
  .entry-detail {
    padding: 1.5rem;
    margin: 1rem;
    background-color: #f8f8f8;
    border-radius: 12px;
  }

  .entry-title {
    font-size: 1.1rem;
    font-weight: bold;
    color: #333333;
    margin: 0 0 1rem 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .entry-genus,
  .entry-generation,
  .entry-growth-rate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e0e0e0;
  }

  .entry-genus:last-child,
  .entry-generation:last-child,
  .entry-growth-rate:last-child {
    border-bottom: none;
  }

  .genus-label,
  .generation-label,
  .growth-rate-label {
    font-size: 0.85rem;
    color: #666666;
    font-weight: 500;
  }

  .genus-value,
  .generation-value,
  .growth-rate-value {
    font-size: 0.85rem;
    color: #333333;
    font-weight: 600;
    text-transform: capitalize;
  }

  .entry-description {
    padding: 1rem 0;
  }

  .entry-description p {
    font-size: 0.9rem;
    color: #333333;
    line-height: 1.6;
    margin: 0;
  }

  /* Pokemon Card Skeleton Styles */
  .pokemon-card-skeleton {
    pointer-events: none;
  }

  .pokemon-card-skeleton .pokemon-number,
  .pokemon-card-skeleton .pokemon-image-wrapper,
  .pokemon-card-skeleton .pokemon-name,
  .pokemon-card-skeleton .pokemon-types {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pokemon-card-skeleton .pokemon-types {
    gap: 0.5rem;
  }

  /* Pokemon Detail Skeleton Styles */
  .skeleton-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .skeleton-title {
    margin-bottom: 0.5rem;
  }

  .skeleton-type {
    margin: 0 0.25rem;
  }

  .skeleton-section-title {
    margin-bottom: 1rem;
  }

  .skeleton-stat-bar {
    width: 100%;
  }

  .skeleton-desc-line {
    margin-bottom: 0.5rem;
  }

  .skeleton-desc-line:last-child {
    margin-bottom: 0;
  }

  /* PrimeReact Skeleton customization */
  .p-skeleton {
    background-color: #e0e0e0 !important;
    border-radius: 4px;
    display: inline-block;
  }

  .p-skeleton::after {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.4) 20%,
      rgba(255, 255, 255, 0.7) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: skeleton-animation 1.6s infinite;
  }

  @keyframes skeleton-animation {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }
`;

export default GlobalStyle;
