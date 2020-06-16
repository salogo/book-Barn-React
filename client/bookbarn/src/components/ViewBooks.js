import React from 'react'
import '../styles/Viewbooks.css'
import Cart from '../components/Cart'
import { connect } from 'react-redux';
import * as actionCreators from '../store/creators/actionCreators';


function ViewBooks (props) {

   let addBooktoCart = () =>{
      console.log("add to cart")
      props.onIncrementCart()
   }

 let bookItems = props.books.map((book , index)=> {
     return <li key={index}>
      
    <b>Book Name : </b>{book.bookname} <b>Description : </b>{book.description} 
 <p>  <img className="images" src={book.URLimages} alt="images"/> </p>
  <button onClick={()=>{  props.deleteBook(book.id)}}>Delete</button>   
  <button onClick={addBooktoCart}>Add to Cart</button>
  <hr />
     </li>
  })
   
    return  <div> <Cart/>
    <ul>  {bookItems} </ul></div>
}
const mapDispatchToProps = (dispatch) => {
   return {
   onIncrementCart: () => dispatch(actionCreators.incrementCart())
}}

export default connect(null, mapDispatchToProps)(ViewBooks);