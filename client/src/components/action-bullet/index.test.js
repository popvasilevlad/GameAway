import React from 'react';
import { shallow } from 'enzyme';
import ActionBullet from './index.jsx';

describe('[component] - action-bullet', () => {
	const mockClickHandler = jest.fn();
	const value = 'mock_value';
	
	const wrapper = shallow(
		<ActionBullet
			onClick={mockClickHandler}
			value={value}
		/>
	);

	it('should render properly', () => {
		expect(wrapper.length).toBe(1);
	});

	it('should contain passed value', () => {
		expect(wrapper.text()).toBe(value);
	});

	it('should call passed handle function', () => {
		wrapper.simulate('click');
		
		expect(mockClickHandler).toHaveBeenCalled();
	});
})