import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


function App() {


  const [todoList, setTodoList] = useState([])


  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoList todoState={todoList}/>
      <AddTodoForm onAddTodo={addTodo}/>
      <p>
      {todoList.map(todo => (
        <div key={todo.id}>
        <p>{todo.title}</p>
        </div>))}
      </p>
    </div>
  );
}

export default App;
