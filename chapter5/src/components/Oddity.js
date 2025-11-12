import {useState} from "react";

function Oddity() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number + 1);
    }
    const onDecrease = () => {
        setNumber(number - 1);
    }
    return (
        <div>
            <div>
                <h2>{number}</h2>
                {/*
                    결국 컴포넌트라는 건 함수를 부른다는 얘긴데, 좀 다른 건 리턴으로 받아서 뭘 할 수가 없다는 것...
                    대신 결과값(화면)을 다 만들어 두라고 하고, 그걸 통째로 이렇게 끼워 넣는다...
                    그런 의미에서 함수가 아니라 컴포넌트다...
                */}
                <Viewer number={number} />
            </div>
            <div>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
        </div>
    );
}

function Viewer({number}) {
    return (
        <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>
    )
}

export default Oddity;