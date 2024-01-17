import { useEffect, useRef } from "react";

const InputWithLabel = (props) => {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    })

    return (
        <>
                <label htmlFor="todoTitle" >{props.children}</label>
                <input id="todoTitle" name="title" value={props.todoTitle} onChange={props.handleTitleChange} ref={inputRef}/>
        </>
    )
}

export default InputWithLabel
