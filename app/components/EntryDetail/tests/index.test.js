/**
 * EntryDetail Tests
 */

import React from 'react';
import { shallow } from 'enzyme';
import EntryDetail from '../index';

describe('<EntryDetail />', () => {
  const mockSpecies = {
    flavor_text_entries: [
      {
        flavor_text: 'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.',
        language: { name: 'en' },
      },
    ],
    genera: [
      {
        genus: 'Seed Pokémon',
        language: { name: 'en' },
      },
    ],
    generation: { name: 'generation-i' },
    growth_rate: { name: 'medium-slow' },
  };

  it('should not crash', () => {
    shallow(<EntryDetail species={mockSpecies} />);
  });

  it('should render description', () => {
    const wrapper = shallow(<EntryDetail species={mockSpecies} />);
    expect(wrapper.find('.entry-description p').text()).toContain('A strange seed');
  });

  it('should render genus', () => {
    const wrapper = shallow(<EntryDetail species={mockSpecies} />);
    expect(wrapper.find('.genus-value').text()).toBe('Seed Pokémon');
  });

  it('should render generation', () => {
    const wrapper = shallow(<EntryDetail species={mockSpecies} />);
    expect(wrapper.find('.generation-value').text()).toBe('GENERATION I');
  });

  it('should render growth rate', () => {
    const wrapper = shallow(<EntryDetail species={mockSpecies} />);
    expect(wrapper.find('.growth-rate-value').text()).toBe('MEDIUM SLOW');
  });

  it('should return null if species is null', () => {
    const wrapper = shallow(<EntryDetail species={null} />);
    expect(wrapper.type()).toBe(null);
  });

  it('should handle missing english entry', () => {
    const speciesWithoutEnglish = {
      flavor_text_entries: [
        {
          flavor_text: 'Some text',
          language: { name: 'ja' },
        },
      ],
    };
    const wrapper = shallow(<EntryDetail species={speciesWithoutEnglish} />);
    expect(wrapper.find('.entry-description p').text()).toBe('No description available.');
  });
});
