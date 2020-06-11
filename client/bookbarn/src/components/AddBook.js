import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Books from './Books';

class AddBook extends Component {

  constructor() {
    super() 
    this.state = {
      bookname:bookname,
      description :''
    }
  }

  componentDidMount() {

    fetch('http://localhost:3001/api/books')
    .then(response => response.json())
    .then(result => {
      this.setState({
        books: result
      })
    })

  }
  handleNameTextBoxChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }



  render() {
    return (
      <div>  
      <input name="bookname" type="text" placeholder="Name" onChange={this.handleTextBoxChange} />
      <input name="description" type="text" placeholder="description" onChange={this.handleTextBoxChange} />

      <h1>{this.state.name}</h1>
      <h1>{this.state.description}</h1>
      </div>
    );
  }
 
}

export default AddBook;
