import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoState }) => {

console.log(todoState);

    return (
        <div>
            <ul>
                {todoState?.map((todo) => {
                    return (
                        <TodoListItem key={todo.id} todo={todo}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList