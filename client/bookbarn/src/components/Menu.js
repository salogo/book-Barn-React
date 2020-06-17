
import React from 'react'
import './Menu.css';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import CartCount from './CartCount';

function Menu(props) {
    return (
        <div className='menu'>
            <div><NavLink to='/'>Home</NavLink></div>
            <div><NavLink to='/login'>Login</NavLink></div>
            {props.isLoggedIn ? <div><NavLink to='/view-cart'>View Cart</NavLink></div> : null}
            {props.isLoggedIn ? <CartCount /> : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.loginRed.isAuthenticated  
    }
}

export default connect(mapStateToProps)(Menu)