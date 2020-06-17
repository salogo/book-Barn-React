import React from 'react'
import { connect } from 'react-redux'

function ViewCart(props) {
    return (
        <div> 
        <h1>View Cart</h1>
        <label>You are Added : {props.totalCartItems} Book/s</label>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        totalCartItems: state.cartRed.cartItems.length  
    }
}

export default connect(mapStateToProps)(ViewCart) 
