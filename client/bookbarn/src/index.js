import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from "redux"
import reducer from './store/reducer'
import { Provider } from 'react-redux'
import { BaseLayout } from './components/BaseLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ViewCart from './components/ViewCart';
import Login from './components/Login';
import cartReducer from './store/reducers/cart'
import loginReducer from './store/reducers/login'

const rootReducer = combineReducers({
  cartRed: cartReducer, 
  loginRed: loginReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route component = {App} path = "/" exact />
            <Route component = {ViewCart} path = "/view-cart" />
            <Route component = {Login} path = "/login" />

          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
