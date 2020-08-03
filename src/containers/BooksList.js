import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { CategoryFilter } from '../components/CategoryFilter';
import { removeBook, filterBook } from '../actions/index';
import { filterBooks } from '../reducers/filter';
function BooksList({
  books, filter, removeBook, handleFilterChange,
}) {
  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <div>
          {
             filterBooks(filter, books).map(book => (
               <Book
                 key={book.id}
                 id={book.id}
                 title={book.title}
                 category={book.category}
                 removeBook={removeBook}
               />
             ))
          }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
  handleFilterChange: category => dispatch(filterBook(category)),
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
