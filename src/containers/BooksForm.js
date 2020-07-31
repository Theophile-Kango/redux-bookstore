/* eslint-disable jsx-a11y/label-has-associated-control */

import React, {Component} from 'react';

export default class BooksForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      category: ''
    }
  }
  
  render(){
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
}
