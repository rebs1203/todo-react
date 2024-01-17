import React from "react";
import TodoListItem from "./TodoListItem";
import style from './TodoList.module.css'

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

export default TodoList