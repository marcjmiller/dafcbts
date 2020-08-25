import React from 'react';
import { mount } from 'enzyme';
import CbtDashboard from '../../../features/dashboard/cbt/CbtDashboard';
import DashboardContainer from '../../../features/dashboard/DashboardContainer';
import { Provider } from 'react-redux';
import { store } from '../../../store';

describe('DashboardContainer tests', () => {
  const wrapper = mount(
    <Provider store={store}>
      <DashboardContainer />
    </Provider>,
  );

  it('should render the Cbt Dashboard by default', () => {
    expect(wrapper.find(CbtDashboard).exists).toBeTruthy();
  });
});
