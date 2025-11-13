import './App.css';
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import {useCallback, useReducer, useRef, useState} from "react";

const mockTodos = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        createDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래 널기",
        createDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        createDate: new Date().getTime(),
    },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            const newItem = {
                id: action.id,
                content: action.content,
                isDone: false,
                createDate: new Date().getTime(),
            }
            return [newItem, ...state];
        case "UPDATE":
            return state.map(item =>
                item.id === action.targetId ? {...item, isDone: !item.isDone} : item
            );
        case "DELETE":
            return state.filter(item => item.id !== action.targetId);
        default:
            return state;
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, mockTodos);
    const idRef = useRef(3);

    function onCreateTodo(content) {
        dispatch({type: "CREATE", id: idRef.current, content});
        idRef.current += 1;
    }
    function onUpdate(targetId) {
        dispatch({type:"UPDATE", targetId});
    }
    const onUpdateTodo = useCallback(onUpdate, []);
    const onDeleteTodo = useCallback((targetId) => {
        dispatch({type:"DELETE", targetId});
    }, []);

    return (
        <div className="App">
            <Header/>
            <TodoEditor onCreateTodo={onCreateTodo}/>
            <TodoList todos={todos} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo}/>
        </div>
    );
}

export default App;
