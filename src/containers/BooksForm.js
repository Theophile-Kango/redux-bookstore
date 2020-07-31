/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

export default function BooksForm() {
  const options = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <label htmlFor="title">Book Title</label>
      <input id="title" name="title" type="text" placeholder="book title" />
      <br />
      <label htmlFor="category">Categories</label>
      <select id="category">
        {options.map(option => (<option key={option}>{option}</option>))}
      </select>
      <br />
      <button type="submit">submit</button>
    </form>
  );
}
