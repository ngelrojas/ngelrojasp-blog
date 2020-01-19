import React from 'react';
import './searchbox.styles.scss';

export const SearchBox = ({placeholder, handleChange}) => {
    return(
        <input
            className="input"
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
        /> 
    )
};
