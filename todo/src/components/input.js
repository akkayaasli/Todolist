import React, { useEffect, useState } from 'react';

function Input(props) {
    return (
        <div>
            <label htmlFor={props.id} className='settLabelDesign'>{props.title}</label>
            <input
                type={props.inputType}
                id={props.id}
                name={props.id}
                value={props.value}
                onChange={props.onChange}
                {...props}
            />
        </div>
    );
}
export default Input;