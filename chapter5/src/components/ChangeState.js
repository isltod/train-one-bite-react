import {useState} from "react";

function ChangeState() {
    // 아래 버튼 클릭 이벤트만 발생해도 ChangeState() 컴포넌트 전체가 리랜더링 된다...App 전체는 아니고...
    console.log("update")
    let [count, setCount] = useState(0);

    function onIncrease() {
        setCount(++count);
    }
    return (
        <div>카운터: {count} <button onClick={onIncrease}>+</button> </div>
    )
}
export default ChangeState;