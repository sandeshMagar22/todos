import React, { useState } from 'react'

//props bina gareko
export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
   
    const submit = (e)=>{
        e.preventDefault();   //yesle hamro page reload huna didaina
        if(!title || !desc){
            alert("Title or Description Cannot be blank");
        }
        else{
        addTodo(title,desc);
        setTitle =("");
        setDesc=("");
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="htmlForm-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="htmlForm-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="htmlForm-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}  className="htmlForm-control" id="desc"/>
                </div>
               
                <button type="submit" className="btn btn-success btn-small">Add To Do</button>
            </form>
        </div>
    )
}
