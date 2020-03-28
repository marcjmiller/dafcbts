import React from 'react';
import App from '../app/App';
import { mount } from 'enzyme';
import { NavBar } from '../features/dashboard/NavBar';
import { Provider } from 'react-redux';
import { store } from '../store';
import LoginModal from '../features/login/LoginModal';
import Dashboard from '../features/dashboard/cbtDashboard/CbtDashboard';
import Footer from '../features/dashboard/Footer';

describe('App unit tests', () => {
  const wrapper = mount(
    <Provider store={store}>
      <App/>
    </Provider>,
  );

  it('should contain the NavBar component', () => {
    expect(wrapper.find(NavBar).exists()).toBeTruthy();
  });

  it('should display a login button that displays a login window after clicking', () => {
    expect(wrapper.find('.user--login-button').at(1).text()).toContain('LOGIN');
    expect(wrapper.find('.user--login-button').at(1).simulate('click'));
    wrapper.update();
    expect(wrapper.find(LoginModal).exists()).toBeTruthy();
  });

  it('should render the dashboard', () => {
    expect(wrapper.find(Dashboard).exists()).toBeTruthy();
  });

  it('should render the footer', () => {
    expect(wrapper.find(Footer).exists()).toBeTruthy();
  });

  // TODO: fix snapshot testing
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


