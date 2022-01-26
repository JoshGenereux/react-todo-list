import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {useEffect, useState} from "react";

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  const filterHandler = () =>{
    switch (status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default :
        setFilteredTodos(todos)
        break;
    }
  }

  useEffect(()=>{
    filterHandler();
  }, [todos, status])

  return (
    <div className="App">
      <header>
        My Todo List
      </header>
      <Form
        setInput={setInput}
        input={input}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
