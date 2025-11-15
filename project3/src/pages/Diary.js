import {useNavigate, useParams} from "react-router-dom";
import useDiary from "../hooks/useDiary";
import {getFormatedDate, setPageTitle} from "../util";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import {useEffect} from "react";

function Diary() {
    const navigate = useNavigate();
    function goBack() {
        navigate(-1);
    }
    function goEdit() {
        navigate(`/edit/${id}`);
    }

    useEffect(() => {
        setPageTitle(`${id}번 일기`)
    })
    const {id} = useParams();
    const data = useDiary(id);
    // 난 그냥 되지만 아무튼 데이터 없으면 튕기기 코드를 넣고...
    if (!data) { return <div>일기를 불러오고 있습니다...</div>; }

    // 그냥 이렇게 막 넣으면 이름 맞춰서 들어가나?
    // 들어가네...필드 이름과 변수 이름을 맞추면 자동으로 맞춰 주는 모양이다..
    const { emotionId, date, content } = data;
    const title = `${getFormatedDate(new Date(date))} 기록`

    return (
        <div>
            <Header
                title={title}
                leftChild={<Button text="< 뒤로 가기" onClick={goBack} />}
                rightChild={<Button text="수정하기" onClick={goEdit} /> }
            />
            <Viewer content={content} emotionId={emotionId} />
        </div>
    );
}

export default Diary;