/*
 * PokemonCard Messages
 *
 * This contains all the text for the PokemonCard component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.PokemonCard';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the PokemonCard component!',
  },
});
