import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor() {
    super() 
    this.state = {
      bookname:'',
      description:''
    }
  }

  componentDidMount() {

    fetch('http://localhost:3001/api/books')
    .then(response => response.json())
    .then(result => { console.log(result)
      this.setState({
        books: result
      })
    })

  }
  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

addBook = () =>{
  const book = {
    bookname:this.state.bookname,
    description:this.state.description
  }
fetch('http://localhost:3001/user/add-book',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify(book)
})
}

  render() {
    return (
      <div>  
      <input name="bookname" type="text" placeholder="Name" onChange={this.handleTextBoxChange} />
      <input name="description" type="text" placeholder="description" onChange={this.handleTextBoxChange} />
       <button onClick={this.addBook} >Submit</button>
      <h1>{this.state.bookname}</h1>
      <h1>{this.state.description}</h1>
      </div>
    );
  }
 
}

export default App;
