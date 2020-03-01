import React from 'react';
import App from '../app/App';
import {shallow} from "enzyme";
import {NavBar} from "../components/NavBar";

describe('App unit tests', () => {
  const wrapper = shallow(<App/>);

  it('should render "Hello World"', () => {
    expect(wrapper.find('div').html()).toMatch(/Hello World/);
  });

  it('should contain the NavBar component', () => {
    expect(wrapper.find(NavBar).exists()).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


