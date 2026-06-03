import { selectLoading } from '../selectors';
import { initialState } from '../reducer';

describe('selectPokemonListPageDomain', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(false);
  });

  describe('selectLoading', () => {
    it('should select the loading state', () => {
      const state = {
        pokemonListPage: {
          ...initialState,
          loading: true,
        },
      };
      expect(selectLoading(state)).toEqual(true);
    });
  });
});
