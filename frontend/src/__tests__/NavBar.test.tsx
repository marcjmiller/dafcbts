import React from 'react';
import { NavBar } from '../components/NavBar';
import { shallow } from 'enzyme';
import { AppBar, Button, IconButton } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeTypes } from '../types';


describe('NavBar unit tests', () => {
  const themeType = ThemeTypes.DARK;
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
    expect(wrapper.find(IconButton).at(1).exists()).toBeTruthy();
    expect(wrapper.find(Brightness7Icon).exists()).toBeTruthy();
    wrapper.find(IconButton).at(1).simulate('click');
    expect(toggleThemeSpy).toHaveBeenCalled();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});