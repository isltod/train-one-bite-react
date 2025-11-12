import './App.css';
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    function handleSetCount(value) {
        setCount(count + value);
    }

    return (
        <div className="App">
            <h1>심플 카운터</h1>
            <section>
                <Viewer count={count} />
            </section>
            <section>
                {/*요게 핵심이네...내가 몰랐던...Props로 상태와 함수를 전달한다...*/}
                <Controller handleSetCount={handleSetCount} />
            </section>
        </div>
    );
}

export default App;
