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

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  
  render(){
    const options = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form>
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
