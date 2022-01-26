import React from "react";

const Form = ({setInput, todos, setTodos, input, setStatus}) => {
  const inputHandler = (e)=>{
    setInput(e.target.value)
  }
  const submitHandler = (e) =>{
    e.preventDefault();

    setTodos([
      ...todos,
      {
        text: input,
        completed: false,
        id: (Math.random()*1000)
      }
    ])
    setInput('')
    console.log(todos)
  }
  const statusHandler = (event) =>{
    setStatus(event.target.value)
  }

  return(
    <form>
      <input
        value={input}
        onChange={(e)=>inputHandler(e)}
        type="text"
        className="todo-input"/>
      <button
        onClick={(e)=>submitHandler(e)}
        className="todo-button"
        type="submit">
        <i className="fas fa-plus-square"/>
      </button>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={statusHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;