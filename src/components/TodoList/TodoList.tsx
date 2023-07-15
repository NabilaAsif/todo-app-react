import React from 'react'

function Todolist(props) {
  return (
    <div className="list-item">
        {props.item}
        <span className='delete-btn'>
        <button 
        onClick={e=>{
          props.editItem(props.index)
        }}>Edit</button>
        <button 
        onClick={e=>{
            props.deleteItem(props.index)
        }}>Delete</button>
        </span>
    </div>
  )
}

export default Todolist