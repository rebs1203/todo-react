import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import style from './AddTodoForm.module.css'

const AddTodoForm = ({ onAddTodo }) => {

    const [todoTitle, setTodoTitle] = useState('')

    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value
        setTodoTitle(newTodoTitle)
    }

    const handleAddTodo = (event) => {
        event.preventDefault()
        onAddTodo({
            title: todoTitle,
            id: Date.now()
    });
        setTodoTitle('')
    }

    return (
        <div className={style.divForm}>
            <form onSubmit={handleAddTodo}>
                <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title</InputWithLabel>
                <button type="submit" className={style.addButton}>Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;