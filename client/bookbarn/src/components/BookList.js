
import React, { useState } from 'react'
import { useEffect } from 'react'
import './BookList.css';
import { connect } from 'react-redux'

function BookList(props) {

    const [books, setBooks] = useState([])

    useEffect(() => {

        fetch('http://localhost:3001/api/books')
        .then(response => response.json())
        .then(result => {
            setBooks(result) // set the state (books)
        })

    },[])

    const handleAddToCart = (book) => {
        // performing dispatch to update the global state 
        props.onAddToCart(book) 
    }

    // map 
   const bookItems = books.map(book => {
    return <li>
              <img className='poster' src={book.poster} />
               <b>{book.name} </b>
               <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
              
        </li>
    })

    return <ul>{bookItems}</ul>
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (book) => dispatch({type: 'ADD_TO_CART', payload: book})
    }
}

export default connect(null,mapDispatchToProps)(BookList)