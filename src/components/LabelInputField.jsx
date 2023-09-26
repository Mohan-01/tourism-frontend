import React from 'react'
import '../css/LabelInputField.css';

const LabelInputField = ({name, label, type, id, placeholder}) => {
  return (
    <div className='label-input-field'>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} placeholder={placeholder ?? '........'}/>
    </div>
  )
}

export default LabelInputField
