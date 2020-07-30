import React, {Component} from 'react';

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
                    <tr>
                        <td>1</td>
                        <td>Book 1</td>
                        <td>Learning</td>
                    </tr> 
                </tbody>
            </table>
        )
    }
}

export default BooksList;