import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function AddBtn({ color }) {
  return (
    <div className="add-btn">
      <button 
        className="btn rounded-pill text-light" 
        style = {{backgroundColor : color}}
      >
        Add to Collection
      </button>
    </div>
  )
}
export default AddBtn