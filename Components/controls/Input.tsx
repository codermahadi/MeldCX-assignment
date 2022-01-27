import React, {ChangeEventHandler} from 'react';

type InputProps = {
    label: string, name: string, id: string, value: string, type: string, placeholder: string, className:string, handleChange: ChangeEventHandler<HTMLInputElement>
}

function Input({label, name, id, value, type, handleChange, placeholder, className}: InputProps) {
    return (
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            className={className}
            placeholder={placeholder}
            onChange={handleChange}/>
    )
}

export default Input;
