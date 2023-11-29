import React, { useEffect, useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("savedTodoList"))??[])
  
  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList))
  }, [todoList])


  return [todoList, setTodoList]
}

function App() {

  const [value, setValue] = useSemiPersistentState()

  const addTodo = (newTodo) => {
    setValue([...value, newTodo])
  }


  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoState={value}/>
    </>
  );
}

export default App;
