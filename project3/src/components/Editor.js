import "./Editor.css";
import {useCallback, useEffect, useState} from "react";
import {emotionList, getFormatedDate} from "../util";
import Button from "./Button";
import {useNavigate} from "react-router-dom";
import EmotionItem from "./EmotionItem";

function Editor({initData, onSubmit}) {
    const [state, setState] = useState({
        date: getFormatedDate(new Date()),
        emotionId: 3,
        content: "",
    });
    const navigate = useNavigate();
    function handleOnGoBack() {
        navigate(-1);
    }
    function handleChangeDate(e) {
        setState({...state, date: e.target.value});
    }
    function handleChangeContent(e) {
        setState({...state, content: e.target.value});
    }
    function handleSubmit(e) {
        onSubmit(state);
    }
    function handleOnChangeEmotion(emotionId) {
        // 마운트 이후에 변하지 않도록 callback,
        // but state 값을 마운트 시점에 받아서 업데이트 안하므로 새로 입력한 값이 저장이 안되나?
        // 그래서 함수형으로 한다고...
        function changeEmotionId(state) {
            return {...state, emotionId};
        }
        setState(changeEmotionId);
        // 이걸 줄여서 쓰면...짧긴 하다..함수 이름 고민할 필요도 없고...
        // setState((state) => ({...state, emotionId}));
    }
    const callBackChangeEmotion = useCallback(handleOnChangeEmotion, [])

    // initData값이 변할 때, 그러니까 처음 랜더링 될 때 상태값에 initData 값을 저장한다...
    useEffect(() => {
        if (initData) {
            setState({
                ...initData,
                date: getFormatedDate(new Date(parseInt(initData.date)))
            });
        }
    }, [initData]);

    return (
        <div className="Editor">
            <div className="editor_section">
                {/*날짜*/}
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
                    <input type="date" value={state.date} onChange={handleChangeDate} />
                </div>
            </div>
            <div className="editor_section">
                {/*감정*/}
                <h4>오늘의 감정</h4>
                <div className="input_wrapper emotion_list_wrapper">
                    {emotionList.map((item) => (<EmotionItem
                        key={item.id} {...item}
                        onClick={callBackChangeEmotion}
                        isSelected={state.emotionId === item.id} />))}
                </div>
            </div>
            <div className="editor_section">
                {/*일기*/}
                <h4>오늘의 일기</h4>
                <div className="input_wrapper">
                    <textarea value={state.content}
                              onChange={handleChangeContent}
                              placeholder="오늘은 어땠나요?" />
                </div>
            </div>
            <div className="editor_section bottom_section">
                {/*작성 완료, 취소*/}
                <Button text="취소하기" onClick={handleOnGoBack} />
                <Button text="작성완료" type={"positive"} onClick={handleSubmit} />
            </div>
        </div>
    )
}

export default Editor;