import React from 'react';

const todoList = [
  {
    id: '1',
    title: 'wake up',
  },

  {
    id: '2',
    title: 'study',
  },

  {
    id: '3',
    title: 'work out',
  },

  {
    id: '4',
    title: 'hurry up'
  }
];


function App() {

  console.log(todoList)
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1>Todo List</h1>
      </header>
      <ul>
        {todoList?.map((item) => {
          return (
          <li key={item.id}>
            {item.title}
          </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
