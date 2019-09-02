import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './index.jsx';
import * as actions from '../../actions/index';

describe('[component] - user info', () => {
	const mockName = 'mock_name';
	
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<UserInfo
				name={mockName}
			/>
		)
	});
	
	it('should render properly', () => {
		expect(wrapper.length).toBe(1);
		expect(wrapper.text()).toBe(mockName);
	});

	it('should render input on click', () => {
		wrapper.simulate('click');

		expect(wrapper.find('.player-name-input').length).toBe(1);
	});

	it('should remove input on blur', () => {
		const mockUpdatedName = 'mock_updated_name';
		const changeNameSpy = jest.spyOn(actions, 'changeName');

		wrapper.simulate('click');

		wrapper.find('.player-name-input').value = mockUpdatedName;
		wrapper.find('.player-name-input').simulate('blur', {"target":{"value": mockUpdatedName}});

		expect(wrapper.find('.player-name-input').length).toBe(0);
		expect(wrapper.text()).toBe(mockUpdatedName);
		expect(changeNameSpy).toHaveBeenCalledTimes(1);
	})
});