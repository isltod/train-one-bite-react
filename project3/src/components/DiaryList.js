import "./DiaryList.css";
import Button from "./Button";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const sortOptions = [
    {value: "latest", name: "최신순"},
    {value: "oldest", name: "오래된 순"}
];

function DiaryList({data}) {
    const [sortType, setSortType] = useState("latest");
    function handleSortTypeChange(e) {
        setSortType(e.target.value);
    }

    const [sortedData, setSortedData] = useState([]);
    useEffect(() => {
        const compare = (a, b) => {
            if (sortType === "latest") {
                return Number(b.date) - Number(a.date);
            } else {
                return Number(a.date) - Number(b.date);
            }
        }
        const copyList = JSON.parse(JSON.stringify(data));
        copyList.sort(compare);
        setSortedData(copyList);
    }, [data, sortType])

    const navigate = useNavigate();
    function handleClickNew() {
        navigate("/new")
    }

    return (
        <div className="DiaryList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <select value={sortType} onChange={handleSortTypeChange}>
                        {sortOptions.map((option, index) => (
                            <option value={option.value} key={index}>{option.name}</option>
                        ))}
                    </select>
                </div>
                <div className="right_col">
                    <Button type="positive" text="새 일기 쓰기" onClick={handleClickNew} />
                </div>
            </div>
        </div>
    )
}

export default DiaryList;