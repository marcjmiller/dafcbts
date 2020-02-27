import React from 'react';
import App from '../App';
import {shallow} from "enzyme";

describe('App unit tests', () => {
  let wrapper = shallow(<App/>);

  it('should render "Hello World"', () => {
    expect(wrapper.find('div').html()).toMatch(/Hello World/);
  });

  it('should match last snapshot also', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


