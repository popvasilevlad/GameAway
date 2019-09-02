import React from 'react';
import { shallow } from 'enzyme';
import ActionBullet from './index.jsx';

describe('[component] - action-bullet', () => {
	it('should render properly', () => {
		const wrapper = shallow(<ActionBullet />);

		expect(wrapper.length).toBe(1);
	})
})