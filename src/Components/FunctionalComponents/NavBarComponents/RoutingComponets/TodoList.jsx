import React, { useState} from 'react'
import { Button } from 'react-bootstrap'

import './TodoList.css'

const TodoList = () => {
    const [todolist, setTodo] = useState("")
    const [addList, setAddList] = useState("")
    const [error, setError] = useState("")
    
    const ChangeTodo = (event) => {
        setTodo(event.target.value)
        
    }
    const AddTodo = (event) => {
        event.preventDefault()
        console.log(todolist)
        if (todolist !== "") {
            const todoDetails = {
                id: Math.floor(Math.random()*1000),
                task: todolist,
                isCompleted:false
            }
            setAddList([...addList,todoDetails])
        }
        else {
          setError("please provide a text")
        }
    }
    const deletetodo=(event, id)=>{
        event.preventDefault()
        setAddList(addList.filter(t=>t.id!=id))
 }
    return (
        <div className="todo-container">
            <h1 className="heading">Todo List</h1>
            <input type="text" value={todolist} placeholder="todoList" name="todlist" className="TodoList" onChange={ChangeTodo} />
            
            <Button className="buttonadd"onClick={AddTodo} >Submit</Button>
            {addList.length > 0 ? <ul>{addList.map(t => <li className="List">{t.task}
                <button onClick={(event)=>deletetodo(event,t.id)} className="button">Delete</button>
            </li>
            )}  </ul> : null}
            {error && <p className="errorMsg">{ error}</p>}
           
        </div>
    )
}
export default TodoList