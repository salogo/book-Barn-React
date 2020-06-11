import React, { Component } from "react";

class Books extends Component {
    render() {

       let bookItems = this.props.books.map(book => {
            return <li>{book.name}</li>
        })

        return (
            <ul>{bookItems}</ul>
        )
    }
}

export default Books 