/**
 *
 * Asynchronously loads the component for PokemonCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
