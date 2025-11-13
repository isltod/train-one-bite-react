import "./TodoList.css";
import TodoItem from "./TodoItem.js";
import {useState} from "react";

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

    return (
        <div className="TodoList">
            <h4>Todo List</h4>
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