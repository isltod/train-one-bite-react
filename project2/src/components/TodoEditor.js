import "./TodoEditor.css";
import {useContext, useRef, useState} from "react";
import {TodoDispatchContext} from "../App";

function TodoEditor() {
    const [content, setContent] = useState("");
    function onChangeContent(e) {
        setContent(e.target.value);
    }

    const { onCreateTodo } = useContext(TodoDispatchContext);
    const inputRef = useRef(null);
    function onSubmit() {
        if (!content) {
            inputRef.current.focus();
        } else {
            onCreateTodo(content);
            setContent("");
        }
    }
    function onKeyDown(e) {
        if (e.key === "Enter") {
            onSubmit()
        }
    }

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 📜🖍</h4>
            <div className="editor-wrapper">
                <input ref={inputRef}
                       value={content}
                       onChange={onChangeContent}
                       onKeyDown={onKeyDown}
                       placeholder="새로운 Todo..."
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default TodoEditor;