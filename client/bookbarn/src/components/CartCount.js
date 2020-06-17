import React from 'react'
import { connect } from 'react-redux'

function CartCount(props) {
    return (
        <label>Cart Count: {props.totalCartItems}</label>
    )
}

const mapStateToProps = (state) => {
    return {
        totalCartItems: state.cartRed.cartItems.length  
    }
}

export default connect(mapStateToProps)(CartCount) 




