/* eslint-disable jsx-a11y/label-has-associated-control */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { createBook } from './../actions/index';

class BooksForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      category: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    const book = {
      id: uuidv4(),
      title,
      category,
    }

    if (title && category) {
      createBook(book);
      this.setState({ 
        title: '',
        category: '' 
      });
      
    }
  }
  
  render(){
    const options = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Book Title</label>
        <input 
          id="title" 
          name="title" 
          type="text" 
          placeholder="book title"
          value={this.state.title}
          onChange={this.handleChange} 
        />
        <br />
        <label htmlFor="category">Categories</label>
        <select 
          id="category"
          name="category" 
          onChange={this.handleChange}
          value={this.state.category}
        >
          <option>--Chose a Category--</option>
          {options.map(option => (<option value={option} key={option}>{option}</option>))}
        </select>
        <br />
        <button type="submit">submit</button>
      </form>
    );
  }
}


BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);