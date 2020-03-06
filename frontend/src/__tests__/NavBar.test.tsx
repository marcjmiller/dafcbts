import React from 'react';
import { NavBar } from '../components/NavBar';
import { shallow } from 'enzyme';
import { AppBar, Button } from '@material-ui/core';
import { ThemeType } from '../resources/types';
import LightbulbIcon from '../resources/icons/LightbulbIcon';
import MenuIcon from '../resources/icons/MenuIcon';

describe('NavBar unit tests', () => {
  const themeType = ThemeType.DARK;
  const toggleThemeSpy = jest.fn();
  const wrapper = shallow(<NavBar themeType={themeType} toggleTheme={toggleThemeSpy}/>);

  it('should display a button to open the menu', () => {
    expect(wrapper.find(MenuIcon).exists()).toBeTruthy();
  });

  it('should display an AppBar w/ DumbAFCbts', () => {
    expect(wrapper.find(AppBar).text()).toContain('DumbAFCbts');
  });

  it('should display a login button', () => {
    expect(wrapper.find(Button).text()).toContain('Login');
  });

  it('should display a button that toggles the theme on press', () => {
    expect(wrapper.find('.themeToggle').exists()).toBeTruthy();
    expect(wrapper.find(LightbulbIcon).exists()).toBeTruthy();
    expect(wrapper.find(LightbulbIcon).props().variant).toEqual(ThemeType.DARK);
    wrapper.find('.themeToggle').simulate('click');
    expect(toggleThemeSpy).toHaveBeenCalled();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});