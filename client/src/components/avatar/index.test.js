import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './index.jsx';
import DefaultAvatar from './default-avatar.png';
import PlayerAvatar from './avatar.png';

describe('[component] - avatar', () => {
	it('should render properly', () => {
		const wrapper = shallow(<Avatar />);

		expect(wrapper.length).toBe
	});

	it('should render opponent avatar properly', () => {
		const wrapper = shallow(<Avatar theme={'default'}/>);

		expect(wrapper.find('img').prop('src')).toBe(DefaultAvatar);
		expect(wrapper.find('img').prop('src')).toBe(PlayerAvatar);
	});

	it('should render user avatar properly', () => {
		const wrapper = shallow(<Avatar theme={'active'}/>);

		expect(wrapper.find('img').prop('src')).toBe(PlayerAvatar);
		expect(wrapper.find('img').prop('src')).toBe(DefaultAvatar);
	});
});