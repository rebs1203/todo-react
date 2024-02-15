import React from "react";
import TodoListItem from "./TodoListItem";
import style from './TodoList.module.css'
import PropTypes from 'prop-types'

const TodoList = ({ todoState, onRemoveTodo }) => {


    return (
        <div className={style.divTodoList}>
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

TodoList.prototype = {
    todoState: PropTypes.array,
    onRemoveTodo: PropTypes.func
}

export default TodoList