
import React from 'react'
import './Menu.css';
import Menu from './Menu';


export function BaseLayout(props) {
    return (
        <div>
            <Menu />
            {props.children}
        </div>
    )
}

