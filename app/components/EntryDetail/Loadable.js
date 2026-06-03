/**
 * EntryDetail Loadable
 * Loadable component for code splitting
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
