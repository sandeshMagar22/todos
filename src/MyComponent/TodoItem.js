
import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
    <p>{todo.desc}</p>
    {/* Creating Button To Delte , aarrow function also used , jaba call huncha taba delete huna ko lai*/}
    <button className='btn btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    
    </div>
  )
}
