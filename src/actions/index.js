import * as actions from '../reducers/actionTypes';

export const createBook = book => ({
  type: actions.CREATE_BOOK,
  book,
});

export const removeBook = id => ({
  type: actions.REMOVE_BOOK,
  id,
});

export const filterBook = book => ({
  type: actions.CHANGE_FILTER,
  book,
});
