import { CHANGE_FILTER } from './actionTypes';

const filter = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.category;
    default:
      return state;
  }
};

const filterBooks = (filter, books) => {
  if (filter !== 'All') {
    const filtered = books.filter(book => book.category === filter);
    return filtered;
  }
  return books;
};

export { filter, filterBooks };
