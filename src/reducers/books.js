import * as actions from './actionTypes';
import INITIAL_STATE from './initialState';

const books = (state = INITIAL_STATE, action) => {
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