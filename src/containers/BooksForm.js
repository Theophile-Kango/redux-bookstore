import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createBook } from '../actions/index';
import { input } from '../components/CategoryFilter';

const Form = styled.form`
  margin: 30px 100px;
  border-top: 1px solid #ccc;
`;
const FormContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background: #0290ff;
  font-size: 13px;
  color: white;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const seclect = {
  ...input,
  width: '500px',
};

const formTitle = {
  fontSize: '20px',
  color: '#ccc',
  textTransform: 'uppercase',
};
class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    const book = {
      id: uuidv4(),
      title,
      category,
    };

    if (title && category) {
      createBook(book);
      this.setState({
        title: '',
        category: '',
      });
    }
  }

  render() {
    const options = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title, category } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3 style={formTitle}>Add new book</h3>
        <FormContent>
          <input
            style={seclect}
            id="title"
            name="title"
            type="text"
            placeholder="Book title"
            value={title}
            onChange={this.handleChange}
          />

          <select
            style={input}
            id="category"
            name="category"
            onChange={this.handleChange}
            value={category}
          >
            <option>--Chose a Category--</option>
            {options.map(option => (<option value={option} key={option}>{option}</option>))}
          </select>
          <Button type="submit">submit</Button>
        </FormContent>
      </Form>
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
