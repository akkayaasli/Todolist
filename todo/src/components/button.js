import React, { useEffect, useState } from 'react';

const Button = (props) => {
    const { type, text, onClick, className } = props;

    return (
        <button type={type} onClick={onClick} className={className}>
            {text}
        </button>
    );
};

export default Button;