import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../actions/index';
import * as types from '../../constants/actionTypes';
import products from '../../mockApi/products';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);

describe('get products actions', () => {
  afterEach(() => {
    mock.restore();
  });

  test('async action success', () => {
    mock.onGet(`${process.env.REACT_APP_PROXY}/api/share`).reply(200, [...products]);

    const expected = [
      { type: types.REQUEST_DATA },
      { type: types.RECEIVE_DATA_SUCCESS, allShareData: products },
    ];

    const store = mockStore();

    return store.dispatch(actions.getAllShare()).then(() => {
      // console.log(JSON.stringify(store.getActions()));
      expect(store.getActions()).toEqual(expected);
    });
  });
});
