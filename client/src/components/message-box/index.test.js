import React from 'react';
import { shallow } from 'enzyme';
import MessageBox from './index.jsx';

describe('[component] - message box', () => {
	it('should render properly', () => {
		const mockText = 'mock_text';
		const wrapper = shallow(
			<MessageBox
				text={mockText}
			/>
		);

		expect(wrapper.length).toBe(1);
		expect(wrapper.text()).toBe(mockText);
	})
});