import React, {Component} from 'react';
import Book from './../components/Book';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BooksList extends Component{
   
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.books.map( book => (<Book key={book.id} book={book} />))
                    }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books,
});

BooksList.propTypes = {
    books: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, null)(BooksList);