/**
 * StatsSummary Tests
 */

import React from 'react';
import { shallow } from 'enzyme';
import StatsSummary from '../index';

describe('<StatsSummary />', () => {
  it('should not crash', () => {
    const pokemon = {
      height: 7,
      weight: 69,
      abilities: [
        { ability: { name: 'overgrow' } },
        { ability: { name: 'chlorophyll' } },
      ],
    };

    shallow(<StatsSummary pokemon={pokemon} />);
  });

  it('should render height', () => {
    const pokemon = {
      height: 7,
      weight: 69,
      abilities: [
        { ability: { name: 'overgrow' } },
      ],
    };

    const wrapper = shallow(<StatsSummary pokemon={pokemon} />);
    expect(wrapper.find('.summary-value').at(0).text()).toContain('0.7m');
  });

  it('should render weight', () => {
    const pokemon = {
      height: 7,
      weight: 69,
      abilities: [
        { ability: { name: 'overgrow' } },
      ],
    };

    const wrapper = shallow(<StatsSummary pokemon={pokemon} />);
    expect(wrapper.find('.summary-value').at(1).text()).toContain('6.9kg');
  });

  it('should render abilities', () => {
    const pokemon = {
      height: 7,
      weight: 69,
      abilities: [
        { ability: { name: 'overgrow' } },
        { ability: { name: 'chlorophyll' } },
      ],
    };

    const wrapper = shallow(<StatsSummary pokemon={pokemon} />);
    expect(wrapper.find('.ability-badge').length).toBe(2);
  });
});
