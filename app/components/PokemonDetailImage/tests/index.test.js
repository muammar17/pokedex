/**
 * PokemonDetailImage Tests
 */

import React from 'react';
import { shallow } from 'enzyme';
import PokemonDetailImage from '../index';

describe('<PokemonDetailImage />', () => {
  it('should not crash', () => {
    const pokemon = {
      name: 'bulbasaur',
      sprites: {
        other: {
          'official-artwork': {
            front_default: 'https://example.com/image.png',
          },
        },
        front_default: 'https://example.com/image.png',
      },
      types: [
        { type: { name: 'grass' } },
        { type: { name: 'poison' } },
      ],
    };

    shallow(<PokemonDetailImage pokemon={pokemon} />);
  });

  it('should render pokemon image', () => {
    const pokemon = {
      name: 'bulbasaur',
      sprites: {
        other: {
          'official-artwork': {
            front_default: 'https://example.com/image.png',
          },
        },
        front_default: 'https://example.com/image.png',
      },
      types: [
        { type: { name: 'grass' } },
        { type: { name: 'poison' } },
      ],
    };

    const wrapper = shallow(<PokemonDetailImage pokemon={pokemon} />);
    expect(wrapper.find('.detail-pokemon-image').prop('src')).toBe('https://example.com/image.png');
  });

  it('should render type badges', () => {
    const pokemon = {
      name: 'bulbasaur',
      sprites: {
        other: {
          'official-artwork': {
            front_default: 'https://example.com/image.png',
          },
        },
        front_default: 'https://example.com/image.png',
      },
      types: [
        { type: { name: 'grass' } },
        { type: { name: 'poison' } },
      ],
    };

    const wrapper = shallow(<PokemonDetailImage pokemon={pokemon} />);
    expect(wrapper.find('.type-badge').length).toBe(2);
  });
});
