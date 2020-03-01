import React from 'react';
import App from '../app/App';
import { mount } from 'enzyme';
import { NavBar } from '../components/NavBar';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('App unit tests', () => {
  const wrapper = mount(
    <Provider store={store}>
      <App/>
    </Provider>,
  );

  it('should render "Hello World"', () => {
    expect(wrapper.find('div').at(0).html()).toMatch(/Hello World/);
  });

  it('should contain the NavBar component', () => {
    expect(wrapper.find(NavBar).exists()).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


