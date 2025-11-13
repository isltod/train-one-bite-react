import './App.css';
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import {useRef, useState} from "react";

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

function App() {
    const [todos, setTodos] = useState(mockTodos);
    const idRef = useRef(3);

    const onCreateTodo = (content) => {
        const newTodo = {
            id: idRef.current,
            content,
            isDone: false,
            createDate: new Date().getTime(),
        };
        setTodos([newTodo, ...todos])
        idRef.current += 1;
    }
    const onUpdateTodo = (targetId) => {
        setTodos(todos.map((todo) => todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo));
        // setTodos(todos.map((todo) => {
        //     // if (todo.id === targetId) {
        //     //     let updatedTodo = {...todo};
        //     //     updatedTodo.isDone = !updatedTodo.isDone;
        //     //     return updatedTodo
        //     // } else {
        //     //     return todo;
        //     // }
        // }));
    }
    const onDeleteTodo = (targetId) => {
        setTodos(todos.filter((todo) => todo.id !== targetId));
    }

    return (
        <div className="App">
            <Header />
            <TodoEditor onCreateTodo={onCreateTodo} />
            <TodoList todos={todos} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} />
        </div>
    );
}

export default App;
