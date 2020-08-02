import * as actions from '../reducers/actionTypes';

export const createBook = book => ({
  type: actions.CREATE_BOOK,
  book,
});

export const removeBook = book => ({
  type: actions.REMOVE_BOOK,
  book,
});
