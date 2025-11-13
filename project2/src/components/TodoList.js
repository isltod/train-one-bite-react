import "./TodoList.css";
import TodoItem from "./TodoItem.js";
import {useMemo, useState} from "react";

function TodoList({todos, onUpdateTodo, onDeleteTodo}) {
    const [search, setSearch] = useState("");
    function onChangeSearch(e) {
        setSearch(e.target.value);
    }
    function getSearchResult() {
        return search === ""
            ? todos
            : todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    }

    function analyzeTodos () {
        console.log("Analyzed todos 함수 호촐");
        const totalCount = todos.length;
        const doneCount = todos.filter(todo => todo.isDone === true).length;
        const notDoneCount = totalCount - doneCount;
        return {totalCount, doneCount, notDoneCount};
    }
    const {totalCount, doneCount, notDoneCount} = useMemo(analyzeTodos, [todos]);

    return (
        <div className="TodoList">
            <h4>Todo List</h4>
            <div>
                <div>총 갯수: {totalCount}</div>
                <div>완료된 할 일: {doneCount}</div>
                <div>미완료된 할 일: {notDoneCount}</div>
            </div>
            <input id="searchbar"
                   value={search}
                   onChange={onChangeSearch}
                   placeholder="검색어를 입력하세요"/>
            <div className="list-wrapper">
                {getSearchResult().map((todo) => (
                    <TodoItem key={todo.id} {...todo} onUpdate={onUpdateTodo} onDelete={onDeleteTodo} />
                ))}
            </div>
        </div>
    );
}

export default TodoList;