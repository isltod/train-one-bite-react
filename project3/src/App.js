import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import {createContext, useEffect, useReducer, useRef, useState} from "react";

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function reducer(state, action) {
    let newState = [];
    switch (action.type) {
        case "INIT": {
            return action.data;
        }
        case "CREATE":
            const newItem = {
                id: action.id,
                date: new Date(action.date).getTime(),
                content: action.content,
                emotionId: action.emotionId,
            };
            newState = [newItem, ...state];
            localStorage.setItem("diary", JSON.stringify(newState));
            return newState;
        case "UPDATE":
            const updateItem = {
                id: action.id,
                date: new Date(action.date).getTime(),
                content: action.content,
                emotionId: action.emotionId,
            };
            newState = state.map((item) =>
                String(item.id) === String(updateItem.id) ? updateItem : item
            );
            localStorage.setItem("diary", JSON.stringify(newState));
            return newState;
        case "DELETE":
            newState = state.filter((item) =>
                String(item.id) !== String(action.id)
            );
            localStorage.setItem("diary", JSON.stringify(newState));
            return newState;
    }
}

function App() {
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        const rawData = localStorage.getItem("diary");
        if (rawData) {
            const localData = JSON.parse(rawData);
            if (localData.length > 0) {
                localData.sort((a, b) => Number(b.id) - Number(a.id));
                idRef.current = localData[0].id + 1;
                dispatch({type: "INIT", data: localData});
            }
        }
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
