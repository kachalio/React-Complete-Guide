import React from 'react';

import './Person.css';

// This is a stateless component because it has not internal state
// Best practice to use as many of these as possible

const person = (props) =>{
    return (
        <div className = "Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;