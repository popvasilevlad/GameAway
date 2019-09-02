import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './index.jsx';

describe('[component] - spinner', () => {
	it('should render properly', () => {
		const wrapper = shallow(<Spinner/>);

		expect(wrapper.length).toBe(1);
		expect(wrapper.find('.loader').length).toBe(1);
	})
});