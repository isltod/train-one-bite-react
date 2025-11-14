import {useSearchParams} from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App";
import {getMonthRangeByDate} from "../util";
import DiaryList from "../components/DiaryList";

function Home() {
    const [pivotDate, setPivotDate] = useState(new Date());
    const [searchParams, setSearchParams] = useSearchParams("");
    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;
    const data = useContext(DiaryStateContext);
    // 이거 초기값을 [] 아닌 {}로 주니까 온갖 문제가 발생한다...타입 주의!!!
    const [filteredData, setFilteredData] = useState([]);

    function onIncreaseMonth() {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    }
    function onDecreaseMonth() {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }

    useEffect(() => {
        if (data.length >= 1) {
            const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
            setFilteredData(
                data.filter(
                    (item) => beginTimeStamp <= item.date && item.date <= endTimeStamp
                )
            );
        } else {
            setFilteredData([]);
        }
    }, [data, pivotDate]);

    return (
        <div>
            <Header title={headerTitle}
                    leftChild={ <Button text="<" onClick={onDecreaseMonth} /> }
                    rightChild={ <Button text=">" onClick={onIncreaseMonth} /> }
            />
            <DiaryList data={filteredData} />
        </div>
    );
}

export default Home;