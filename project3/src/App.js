import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import {createContext, useEffect, useReducer, useRef, useState} from "react";

const mockData = [
    {
        id: "mock1",
        date: new Date().getTime() - 1,
        content: "mock1",
        emotionId: 1,
    },
    {
        id: "mock2",
        date: new Date().getTime() - 2,
        content: "mock2",
        emotionId: 2,
    },
    {
        id: "mock3",
        date: new Date().getTime() - 3,
        content: "mock3",
        emotionId: 3,
    },
]

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case "INIT":
            return action.data;
        case "CREATE":
            const newItem = {
                id: action.id,
                date: new Date(action.date).getTime(),
                content: action.content,
                emotionId: action.emotionId,
            };
            return [newItem, ...state];
        case "UPDATE":
            const updateItem = {
                id: action.id,
                date: new Date(action.date).getTime(),
                content: action.content,
                emotionId: action.emotionId,
            };
            return state.map((item) =>
                String(item.id) === String(updateItem.id) ? updateItem : item
            );
        case "DELETE":
            return state.filter((item) =>
                String(item.id) !== String(action.id)
            );
    }
}

function App() {
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        dispatch({type: "INIT", data: mockData});
        setIsDataLoaded(true);
    }, []);
    function onCreate(date, content, emotionId) {
        dispatch({type: "CREATE", id:idRef.current, date, content, emotionId});
        idRef.current += 1;
    }
    function onUpdate(id, date, content, emotionId) {
        dispatch({type: "UPDATE", id, date, content, emotionId});
    }
    function onDelete(id) {
        dispatch({type: "DELETE", id});
    }

    if (!isDataLoaded) {
        return <div>데이터를 불러오는 중입니다...</div>
    } else {
        return (
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/new" element={<New />} />
                            <Route path="/diary/:id" element={<Diary />} />
                            <Route path="/edit/:id" element={<Edit />} />
                        </Routes>
                    </div>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        );
    }
}

export default App;
