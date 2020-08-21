import React from 'react';
import Footer from '../../../features/dashboard/Footer';
import { shallow } from 'enzyme';

describe('Footer unit tests', () => {
  it('should display the footer content', () => {
    const testSubject = shallow(<Footer />);

    expect(testSubject.text()).toContain('DumbAFCBTs by Marc.')
  });
});
