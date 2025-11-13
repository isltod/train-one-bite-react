import './App.css';
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import {useEffect, useRef, useState} from "react";
import {logDOM} from "@testing-library/dom";
import Even from "./components/Even";

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    function handleSetCount(value) {
        setCount(count + value);
    }
    function handleSetText(e) {
        setText(e.target.value);
    }

    // 요건 마운트 업데이트 다 호출됨
    // useEffect(() => {
    //     console.log("호출됨: ", count, text);
    // }, [count, text]);
    // 요것도 마운트 업데이트 다 호출됨
    // useEffect(() => {
    //     console.log("호출됨: ", count, text);
    // });
    // 요것만!! 마운트에서만 호출됨
    // useEffect(() => {
    //     console.log("호출됨: ", count, text);
    // }, []);

    // 따라서 제대로 마운트 업데이트 구분해서 뭘 하려면... 아래처럼? 또는 위에 1, 3번으로 나눠서...
    // const didMountRef = useRef(false);
    // useEffect(() => {
    //     if (!didMountRef.current) {
    //         console.log("컴포넌트 마운트")
    //         didMountRef.current = true;
    //         // 이건 없어도 되는게 맞는거 같고..
    //         // return;
    //     } else {
    //         console.log("컴포넌트 업데이트");
    //     }
    // }, [count, text]);

    // 언마운트 이전에 클린업부터...
    // 이게 디게 복잡한데...1 처음에 깜빡(하고 지우기?) -> 2. 이 자체가 useEffect -> 3. 다시 새 깜빡 (그리고 얘도 지우기?)
    // useEffect(() => {
    //     const intervalID = setInterval(() => {
    //         console.log("깜빡")
    //     }, 1000);
    //     return () => {
    //         console.log("클린업")
    //         clearInterval(intervalID)
    //     };
    // })

    return (
        <div className="App">
            <h1>심플 카운터</h1>
            <section>
                <input type="text" onChange={handleSetText} />
            </section>
            <section>
                <Viewer count={count} />
                {count % 2 == 0 && <Even/>}
            </section>
            <section>
                {/*요게 핵심이네...내가 몰랐던...Props로 상태와 함수를 전달한다...*/}
                <Controller handleSetCount={handleSetCount} />
            </section>
        </div>
    );
}

export default App;
