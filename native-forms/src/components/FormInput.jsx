import "./FormInput.css"
import { useState } from 'react';
const FormInput = ({label,handleChange, id, ...inputProps}) => {

    return (
        <div className="formInput">
            <label>{label}</label>
            <input
            {...inputProps}
            onChange={handleChange}
            />
        </div>
    );
}

export default FormInput;