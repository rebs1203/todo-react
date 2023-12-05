import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoState, onRemoveTodo }) => {


    return (
        <div>
            <ul>
                {todoState?.map((todo) => {
                    return (
                        <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList