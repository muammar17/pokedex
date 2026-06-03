/**
 * API utilities for Pokédex application
 * Uses Axios for HTTP requests with PokeAPI
 */

import axios from 'axios';

// API_URL from webpack.dev.babel.js DefinePlugin
const API_URL = process.env.API_URL || 'https://pokeapi.co/api/v2/';

/**
 * Create axios instance with base configuration
 */
export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request interceptor for logging/debugging
 */
api.interceptors.request.use(
  config =>
    // console.log('API Request:', config);
    config,
  error => Promise.reject(error),
);

/**
 * Response interceptor for error handling
 */
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.message);
    } else {
      // Error in request configuration
      console.error('Request Error:', error.message);
    }
    return Promise.reject(error);
  },
);

/**
 * Pokemon API endpoints
 */
export const pokemonAPI = {
  /**
   * Get list of all Pokemon (with pagination)
   * @param {number} limit - Number of results per page
   * @param {number} offset - Starting position
   */
  getPokemonList: (limit = 151, offset = 0) =>
    api.get(`pokemon?limit=${limit}&offset=${offset}`),

  /**
   * Get Pokemon details by ID or name
   * @param {string|number} identifier - Pokemon ID or name
   */
  getPokemonById: identifier => api.get(`pokemon/${identifier}`),

  /**
   * Get Pokemon by type
   * @param {string} type - Pokemon type (e.g., 'electric', 'fire', 'water')
   */
  getPokemonByType: type => api.get(`type/${type}`),

  /**
   * Get Pokemon species data (for additional info)
   * @param {string|number} identifier - Pokemon ID or name
   */
  getSpecies: identifier => api.get(`pokemon-species/${identifier}`),

  /**
   * Get all Pokemon types
   */
  getTypes: () => api.get('type'),
};

/**
 * Type API endpoints
 */
export const typeAPI = {
  /**
   * Get all available Pokemon types
   */
  getAllTypes: () => api.get('type'),

  /**
   * Get details of a specific type
   * @param {string} typeName - Name of the type
   */
  getTypeDetails: typeName => api.get(`type/${typeName}`),
};

/**
 * Helper function to fetch multiple Pokemon details
 * @param {Array} pokemonList - Array of Pokemon objects with url
 */
export const fetchMultiplePokemon = pokemonList => {
  const promises = pokemonList.map(pokemon =>
    api.get(pokemon.url).then(response => response.data),
  );
  return Promise.all(promises);
};

export default api;
