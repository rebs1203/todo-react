import { useEffect, useRef } from "react";
import PropTypes from 'prop-types'

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

InputWithLabel.prototype = {
    props: PropTypes.node
}

export default InputWithLabel
