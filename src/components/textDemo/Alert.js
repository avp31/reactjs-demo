import React from 'react'

const Alert = (props) => {
    const capitalized = (word) => {
          return word.toUpperCase();
    }
  return (
    <>
    {/* props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalized(props.alert.type)} :</strong> {props.alert.message}
    </div> */}
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">TextUtils</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      {props.alert && <div className={`alert alert-${props.alert.type} `} role="alert">
        <strong>{capitalized(props.alert.type)} :</strong> {props.alert.message}
    </div>}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
    </>

  )
}

export default Alert
