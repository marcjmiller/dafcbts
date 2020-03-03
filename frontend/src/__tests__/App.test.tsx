import React from 'react';
import App from '../app/App';
import { mount } from 'enzyme';
import { NavBar } from '../components/NavBar';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('App unit tests', () => {
  // const cbts: CbtModel[] = [
  //   new CbtModel(
  //     1,
  //     'Cbts4Dummies',
  //     'Cbts for Dummies',
  //     'http://www.google.com',
  //     'Internet'),
  // ];
  //
  // let mockStore: RootState = {
  //   cbts: {
  //     cbts: cbts,
  //     error: null,
  //     loading: true,
  //   },
  //   theme: {
  //     themeType: ThemeTypes.DARK,
  //   },
  // };

  const wrapper = mount(
    <Provider store={store}>
      <App/>
    </Provider>,
  );

  it('should contain the NavBar component', () => {
    expect(wrapper.find(NavBar).exists()).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


