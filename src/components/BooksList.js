import React, {Component} from 'react';
import Book from './Book';
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
                    <Book id="1" title="Book" category="simple book"/>
                </tbody>
            </table>
        )
    }
}

export default BooksList;