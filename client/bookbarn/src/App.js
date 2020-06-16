import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ViewBooks from './components/ViewBooks';
import { connect } from 'react-redux';

class App extends Component {

  constructor() {
    super() 
    this.state = {
      bookname:'',
      description:'',
      URLimages:'',
      books:[]
    }
  }
getbooks = ()=>{
  fetch('http://localhost:3001/api/books')
    .then(response => response.json())
    .then(result => { 
      this.setState({
        books: result
      })
    }) 
}
  componentDidMount() {
this.getbooks()


  }
  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

addBook = () =>{
  const book = {
    bookname:this.state.bookname,
    description:this.state.description,
    URLimages:this.state.URLimages
  }
fetch('http://localhost:3001/user/add-book',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify(book)
}).then(()=>{
  this.getbooks()
})
}

deleteBook = (bookid) =>{
 
  
fetch('http://localhost:3001/user/delete-book',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({bookid:bookid})

}).then(( response)=>{ return response.json() }).then((result)=>{
  console.log(result)
  this.getbooks()

})
}

  render() {
    return (
      <div>  
      <h1> cart-{this.props.cart}</h1>
      <input name="bookname" type="text" placeholder="Name" onChange={this.handleTextBoxChange} />
      <input name="description" type="text" placeholder="description" onChange={this.handleTextBoxChange} />
      <input name="URLimages" type="text" placeholder="URLimages" onChange={this.handleTextBoxChange} />
       <button onClick={this.addBook} >Submit</button>

       <ViewBooks books={this.state.books} deleteBook={this.deleteBook} />
       
      </div>
    );
  }
 
}

const mapStateToProps = (state)=>{
  
return {
  cart:state.cart
}
}

export default connect(mapStateToProps)(App)
