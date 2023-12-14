import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {

  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const fetchData = async () => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`
    
    const options = {
      method: 'GET',
      headers: {
        Authorization:`Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`
    }
    }
    
    try {
      const response = await fetch(url, options)
      if(!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      const data = await response.json()

      const todos = data.records.map((todo) => todo = {title: todo.fields.title, id: todo.id })
      setTodoList(todos)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }

}

  useEffect(() => {
    fetchData();
  }, [])


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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
        <header>
          <h1>Todo List</h1>
        </header>
        <AddTodoForm onAddTodo={addTodo} />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <TodoList todoState={todoList} onRemoveTodo={removeTodo} />
        )}
      </>} />
      <Route path='/new' element={<>
        <h1>New Todo List</h1>
      </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
