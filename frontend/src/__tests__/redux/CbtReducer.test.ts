import reducer, { getCbtsSuccess, initialState, getCbtsFailed } from '../../store/reducer/slices/cbtSlice';
import { CbtModel } from '../../models/CbtModel';

describe('CbtReducer tests', () => {
  it('should return the initial state', () => {
    const result = reducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  it('should should load cbts when returned from the API', () => {
    const data = [
      new CbtModel(1, 'name1', 'description1', 'address1', 'source1'),
      new CbtModel(2, 'name2', 'description2', 'address2', 'source2'),
      new CbtModel(3, 'name3', 'description3', 'address3', 'source3'),
    ];
    const nextState = reducer(initialState, getCbtsSuccess(data));

    expect(nextState.cbts).toEqual(data);
    expect(nextState.loading).toEqual(false);
    expect(nextState.error).toBeNull();
  });

  it('should send Error messages to state on error', () => {
    const data = "This is an error message";
    const nextState = reducer(initialState, getCbtsFailed(data))

    expect(nextState.cbts).toEqual([]);
    expect(nextState.loading).toEqual(false);
    expect(nextState.error).toEqual(data);
  });
});