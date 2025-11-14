import "./TodoItem.css";
import React, {useContext} from "react";
import {TodoDispatchContext} from "../App";

function TodoItem({id, isDone, content, createDate}) {
    console.log(`${id} Todo 업데이트`);
    const {onUpdateTodo, onDeleteTodo} = useContext(TodoDispatchContext);
    const onChangeCheckBox = () => {
        onUpdateTodo(id);
    }
    const onClickDelete = (e) => {
        onDeleteTodo(id);
    }

    return (
        <div className="TodoItem">
            <div className="checkbox-col">
                <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
            </div>
            <div className="title-col">{content}</div>
            <div className="date-col">
                {new Date(createDate).toLocaleString()}
            </div>
            <div className="btn-col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    )
}

export default React.memo(TodoItem);