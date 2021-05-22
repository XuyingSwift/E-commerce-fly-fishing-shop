import React from 'react';
import './FormInput.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => {
    return(
        <div className='formContainer'>
            <input className='formInput' onChange={handleChange}  {...otherProps}/>
            {label ? (
                <label className={`${
                otherProps.value.length ? 'shrink' : ''
              } formLabel`}>
                {label}
                </label>):null}
        </div>
    )
}

export default FormInput;