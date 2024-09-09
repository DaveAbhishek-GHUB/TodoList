/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);
  const [forEdit, setforEdit] = useState(null);

  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(Todo){
      if(forEdit !== null){
        const updatedTodos = [...Todos];
        updatedTodos[forEdit] = Todo;
        setTodos(updatedTodos);
        setforEdit(null);
      }
      else{
        setTodos([...Todos, Todo]);
      }
      setTodo("");
    }
  }

  const handleDelete = (index) =>{
    const deletedTodo = Todos.filter((_, i) => i !== index);
    setTodos(deletedTodo);
  }

  const handleEdit = (index) => {
    setTodo(Todos[index]);
    setforEdit(index);
  }
  return (
    <>
      <div className='main-container'>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1>Enter you tasks here:</h1>
            <input type="text" placeholder='Enter your task' value={Todo} onChange={handleChange}/>
            <input type="submit" />
          </form>
          <div className="task-container">
            {Todos.map((todo, index)=>{
              return <div className="All-Todos" key={index}>
                <p>{index+1}. {todo}</p>
                <button onClick={()=>handleDelete(index)}>Delete</button>
                <button onClick={()=>handleEdit(index)}>Edit</button>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
