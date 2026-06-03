/**
 * BaseStatsTable Tests
 */

import React from 'react';
import { shallow } from 'enzyme';
import BaseStatsTable from '../index';

describe('<BaseStatsTable />', () => {
  const mockStats = [
    { stat: { name: 'hp' }, base_stat: 45 },
    { stat: { name: 'attack' }, base_stat: 49 },
    { stat: { name: 'defense' }, base_stat: 49 },
    { stat: { name: 'special-attack' }, base_stat: 65 },
    { stat: { name: 'special-defense' }, base_stat: 65 },
    { stat: { name: 'speed' }, base_stat: 45 },
  ];

  it('should not crash', () => {
    shallow(<BaseStatsTable stats={mockStats} />);
  });

  it('should render all stats', () => {
    const wrapper = shallow(<BaseStatsTable stats={mockStats} />);
    expect(wrapper.find('.stat-row').length).toBe(7); // 6 stats + 1 total
  });

  it('should calculate total stats correctly', () => {
    const wrapper = shallow(<BaseStatsTable stats={mockStats} />);
    const totalRow = wrapper.find('.total-row');
    expect(totalRow.find('.stat-value').text()).toBe('318');
  });

  it('should render stat names correctly', () => {
    const wrapper = shallow(<BaseStatsTable stats={mockStats} />);
    expect(wrapper.find('.stat-name').at(0).text()).toBe('HP');
    expect(wrapper.find('.stat-name').at(1).text()).toBe('ATK');
  });

  it('should return null if stats is not an array', () => {
    const wrapper = shallow(<BaseStatsTable stats={null} />);
    expect(wrapper.type()).toBe(null);
  });
});
