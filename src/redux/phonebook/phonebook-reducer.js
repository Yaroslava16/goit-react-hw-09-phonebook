import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchContactsSuccess,
  addContactSuccess,
  deleteContactSuccess,
  filter,
} from './phonebook-actions';

const сontactsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [filter]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  contacts: сontactsReducer,
  filter: filterReducer,
});

export default phonebookReducer;
