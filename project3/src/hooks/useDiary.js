import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App";
import {useNavigate} from "react-router-dom";

function useDiary(id) {
    const data = useContext(DiaryStateContext);
    const [diary, setDiary] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const matchDiary = data.find((diary) => String(diary.id) === String(id));
        if (matchDiary) {
            setDiary(matchDiary);
        } else {
            // 이건 다른 데서 다 하고 있는 일인데?
            // alert("일기가 존재하지 않습니다.");
            // navigate("/", {replace: true});
        }
    }, [id, data]);

    return diary;
}

export default useDiary;