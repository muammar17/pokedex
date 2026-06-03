/**
 *
 * Asynchronously loads the component for PokemonListPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
