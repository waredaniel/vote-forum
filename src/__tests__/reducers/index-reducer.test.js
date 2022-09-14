import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import ticketListReducer from '../../reducers/ticket-list-reducer';


let store = createStore(rootReducer);
describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainPostList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of postListReducer matches root reducer', () => {
    expect(store.getState().mainPostList).toEqual(postListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_POST action works for postListReducer and root reducer', () => {
    const action = {
      type: 'ADD_POST',
      title: 'test1',
      author: 'daniel',
      body: 'Redux action is not working correctly.',
      upVotes: 0,
      downVotes: 0,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().mainPostList).toEqual(postListReducer(undefined, action));
  });
  
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});