import React from 'react';
import { NavBar } from '../../../features/dashboard/NavBar';
import { mount } from 'enzyme';
import { Typography } from '@material-ui/core';
import { ThemeType } from '../../../resources/types';
import LightbulbIcon from '../../../resources/icons/LightbulbIcon';
import { store } from '../../../store';
import { Provider } from 'react-redux';
import MenuIcon from '../../../resources/icons/MenuIcon';

describe('NavBar unit tests', () => {
  const themeType = ThemeType.DARK;
  const toggleThemeSpy: jest.Mock = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <NavBar themeType={themeType} toggleTheme={toggleThemeSpy}/>
    </Provider>);

  it('should display a button to open the menu', () => {
    expect(wrapper.find(MenuIcon).exists()).toBeTruthy();
  });

  it('should display an AppBar w/ DumbAFCbts', () => {
    expect(wrapper.find(Typography).text()).toContain('DumbAFCbts');
  });

  it('should display a button that toggles the theme on press', () => {
    expect(wrapper.find('.theme-toggle--button').exists()).toBeTruthy();
    expect(wrapper.find(LightbulbIcon).exists()).toBeTruthy();
    expect(wrapper.find(LightbulbIcon).props().variant).toEqual(ThemeType.DARK);
    wrapper.find('.theme-toggle--button').simulate('click');
    expect(toggleThemeSpy).toHaveBeenCalled();
  });

  // TODO: fix snapshot testing
  // it('should match the snapshot', () => {
  //   expect(wrapper).toMatchSnapshot();
  // });
});