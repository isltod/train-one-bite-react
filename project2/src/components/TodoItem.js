import "./TodoItem.css";
import React from "react";

function TodoItem({id, isDone, content, createDate, onUpdate, onDelete}) {
    console.log(`${id} Todo 업데이트`);
    const onChangeCheckBox = () => {
        onUpdate(id);
    }
    const onClickDelete = (e) => {
        onDelete(id);
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