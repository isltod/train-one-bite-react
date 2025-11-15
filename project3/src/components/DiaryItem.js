import "./DiaryItem.css";
import {getEmotionImgById} from "../util";
import {useNavigate} from "react-router-dom";
import Button from "./Button";
import React from "react";

function DiaryItem({id, emotionId, content, date}) {
    const navigate = useNavigate();
    function goDetail() {
        navigate(`/diary/${id}`);
    }
    function goEdit() {
        navigate(`/edit/${id}`);
    }

    return <div className="DiaryItem">
        <div className={["img_section", `img_section_${emotionId}`].join(" ")} onClick={goDetail}>
            <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
        </div>
        <div className="info_section" onClick={goDetail}>
            <div className="date_wrapper">
                {new Date(parseInt(date)).toLocaleString()}
            </div>
            <div className="content_wrapper">
                {content.slice(0, 23) + "..."}
            </div>
        </div>
        <div className="button_section">
            <Button onClick={goEdit} text="수정하기" />
        </div>
    </div>;
}

export default React.memo(DiaryItem);