import {useNavigate, useParams} from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../components/Header";
import Button from "../components/Button";
import {useContext} from "react";
import {DiaryDispatchContext} from "../App";
import Editor from "../components/Editor";

function Edit() {
    const navigate = useNavigate();
    function onGoBack() {
        navigate(-1);
    }

    const {onDelete, onUpdate} = useContext(DiaryDispatchContext)
    function onClickDelete() {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
            onDelete(id);
            navigate("/", {replace: true});
        }
    }
    function onSubmit(data) {
        if (window.confirm("일기를 정말 수정할까요?")) {
            const {date, content, emotionId} = data;
            onUpdate(id, date, content, emotionId);
            navigate("/", {replace: true});
        }
    }

    const {id} = useParams();
    const data = useDiary(id);
    if (!data) return <div>일기를 불러오고 있습니다.</div>;

    return (
        <div>
            <Header title="일기 수정하기"
                leftChild={<Button text="< 뒤로 가기" onClick={onGoBack} /> }
                rightChild={<Button text="삭제하기" type={"negative"} onClick={onClickDelete} /> }
            />
            <Editor initData={data} onSubmit={onSubmit} />
        </div>
    )
}

export default Edit;