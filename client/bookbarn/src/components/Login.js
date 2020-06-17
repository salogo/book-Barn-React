
import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

function Login(props) {

    const [username, setUsername] = useState('')

    const handleUserNameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleLogin = () => {

        // perform a fetch request to the Node server and authenticate the user 

        // if the user is authenticated successfully then update the global state isAuthenticated = true 

        props.onAuthenticated(true)
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="text" name="username" onChange={handleUserNameChange} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuthenticated: (success) => dispatch({type: 'AUTHENTICATED', value: success})
    }
}

export default connect(null,mapDispatchToProps)(Login) 