import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

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
        <div>
            <form onSubmit={handleAddTodo}>
                <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title</InputWithLabel>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;