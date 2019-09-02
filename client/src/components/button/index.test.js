import React from 'react';
import { shallow } from 'enzyme';
import Button from './index.jsx';

describe('[component] - button', () => {
	const mockClickHandler = jest.fn();
	const mockButtonText = 'mock_button_text';

	const wrapper = shallow(
		<Button
			text={mockButtonText}
			handleClick={mockClickHandler}
		/>
	);
	
	it('should render properly', () => {
		expect(wrapper.length).toBe(1);
		expect(wrapper.text()).toBe(mockButtonText);
	});

	it('should call passed handler on click', () => {
		wrapper.simulate('click');

		expect(mockClickHandler).toHaveBeenCalledTimes(1);
	});
});