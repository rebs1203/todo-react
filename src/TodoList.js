import React from "react";

const TodoList = () => {
    
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

    return (
        <div>
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
    )
}

export default TodoList