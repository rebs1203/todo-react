import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


function App() {

  const [ newTodo, setNewTodo ] = useState('')

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoList />
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>
        {newTodo}
      </p>
    </div>
  );
}

export default App;
