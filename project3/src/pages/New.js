import {useNavigate} from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import {useContext, useEffect} from "react";
import {DiaryDispatchContext} from "../App";
import {setPageTitle} from "../util";

function New() {
    const navigate = useNavigate();
    function goBack() {
        navigate(-1);
    }

    const {onCreate} = useContext(DiaryDispatchContext);
    function onSubmit(data) {
        const {date, content, emotionId} = data;
        onCreate(date, content, emotionId);
        navigate("/", {replace: true});
    }

    useEffect(() => {
        setPageTitle("새 일기 쓰기")
    }, []);

    return (
        <div>
            <Header title="새 일기 쓰기"
                    leftChild={<Button text="< 뒤로 가기" onClick={goBack} /> }
            />
            <Editor onSubmit={onSubmit} />
        </div>
    )
}

export default New;