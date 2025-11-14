import './App.css';
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import {createContext, useCallback, useMemo, useReducer, useRef} from "react";

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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

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
    const memoizedDispatch = useMemo(() => {
        return {onUpdateTodo, onDeleteTodo, onCreateTodo};
    }, []);

    return (
        <div className="App">
            <Header/>
            <TodoStateContext.Provider value={{ todos }}>
                <TodoDispatchContext.Provider value={ memoizedDispatch }>
                    <TodoEditor />
                    <TodoList />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;
