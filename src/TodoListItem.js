import React from "react";
import style from "./TodoListItem.module.css"

const TodoListItem = ({ todo, onRemoveTodo }) => {

    return (
        <li className={style.listItem}>
            {todo.title + ' '}
            <button type="button" className={style.button} onClick={() => onRemoveTodo(todo.id)}>Remove</button>
        </li>
    )
}

export default TodoListItem
