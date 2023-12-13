import React, { useEffect, useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


function App() {

  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

    const fetchData = async () => {
      const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000);
    }).then((result) => {setTodoList(result.todoList)})
    return result 
  }

    fetchData();


  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList))
    }
  }, [isLoading, todoList])


  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }


  const removeTodo = (id) => {

    const index = todoList.findIndex(todo => todo.id === id)

    if(index !== -1) {
      const updatedList = [...todoList]
      updatedList.splice(index, 1)
      setTodoList(updatedList)
    }
  }



  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo={addTodo}/>
      {
        isLoading ?
        <p>Loading...</p>
        :
        <TodoList todoState={todoList} onRemoveTodo={removeTodo}/>
      }
    </>
  );
}

export default App;
