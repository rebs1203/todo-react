import React from "react";
import style from "./TodoListItem.module.css"
import PropTypes from 'prop-types'

const TodoListItem = ({ todo, onRemoveTodo }) => {

    return (
        <li className={style.listItem}>
            {todo.title + ' '}
            <button type="button" className={style.removeButton} onClick={() => onRemoveTodo(todo.id)}>Remove</button>
        </li>
    )
}

TodoListItem.prototype = {
    todo: PropTypes.string,
    onRemoveTodo: PropTypes.func
}

export default TodoListItem
