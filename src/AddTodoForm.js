import React from "react";

const AddTodoForm = (props) => {

    const handleAddTodo = (event) => {
        event.preventDefault()
        const todoTitle = event.target.title.value;
        console.log(todoTitle)
        props.onAddTodo(todoTitle);
        event.target.title.value = ''
    }

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle" >Title</label>
                <input id="todoTitle" name="title"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;