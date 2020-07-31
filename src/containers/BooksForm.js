import React, { Component } from 'react'

export default class BooksForm extends Component {
    render() {
        const options = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
        return (
            <form>
                <label>Book Title</label>
                <input type="text" placeholder="book title"/><br/>
                <label>Categories</label>
                <select>
                    {options.map(option => (<option key={option}>{option}</option>))}
                </select><br/>
                <button type="submit">submit</button>
            </form>
        )
    }
}
