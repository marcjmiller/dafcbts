import { mount } from 'enzyme';
import React from 'react';
import { store } from '../../../../store';
import { getCbtsSuccess } from '../../../../store/reducer/slices/cbtSlice';
import { CbtModel } from '../../../../models/CbtModel';
import { Provider } from 'react-redux';
import CbtDashboard from '../../../../features/dashboard/cbt/CbtDashboard';
import CbtCard from '../../../../features/cards/cbt/CbtCard';

describe('CBT Card Tests', () => {
  it('Should render Cbt cards for each Cbt from the backend', () => {
    const data = [
      new CbtModel(1, 'name1', 'description1', 'address1', 'source1'),
      new CbtModel(2, 'name2', 'description2', 'address2', 'source2'),
    ];

    store.dispatch(getCbtsSuccess(data));

    const testSubject = mount(
      <Provider store={store}>
        <CbtDashboard handleViewQuestions={jest.fn}/>
      </Provider>,
    );

    expect(testSubject.find(CbtCard).exists()).toBeTruthy();
    expect(testSubject.find(CbtCard).length).toBe(2);
  });
});
