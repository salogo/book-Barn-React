import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import CartCount from './components/CartCount';

function App() {
  return (
    <div>
      <CartCount />
    <BookList />
    </div>
  );
}

export default App;
