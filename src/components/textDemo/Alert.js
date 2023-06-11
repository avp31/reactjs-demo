import React from 'react'

const Alert = (props) => {
    const capitalized = (word) => {
          return word.toUpperCase();
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalized(props.alert.type)} :</strong> {props.alert.message}
    </div>
  )
}

export default Alert


