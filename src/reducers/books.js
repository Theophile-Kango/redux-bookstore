import * as actions from './actionTypes';
import initialState from './initialState';

const books = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_BOOK:
      return [...state, action.book];

    case actions.REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);

    default:
      return state;
  }
};

export default books;
