/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

 const CustomButton = (props) => {
    return(
    <button onClick={props.handleClick} className='header'>{props.text}</button>
    ) 
}

const InputButton = (props) => {
    return(
        <button onClick={props.inputClick}>{props.text}</button>
    )
}

export {CustomButton, InputButton};