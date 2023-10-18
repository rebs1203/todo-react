import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = () => {

    let todoList = [
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

    return (
        <div>
            <ul>
                {todoList?.map((todo) => {
                    return (
                        <TodoListItem key={todo.id} todo={todo}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList