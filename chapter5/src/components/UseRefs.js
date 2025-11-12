import {useRef, useState} from "react";

function UseRefs() {
    const [text, setText] = useState('');
    const textRef = useRef();
    const handleOnChange = (e) => {
        setText(e.target.value);
    };
    const handleOnClick = (e) => {
        // 이건 텍스트 칸을 비워주는 코드
        // textRef.current.value = "";
        // 근데 아래 value 쓰고 이걸 써도 똑 같은데...
        // setText("")
        // 이건 5글자 넘기라고 강요하는 포커스 코드
        if (text.length < 5) {
            alert("다섯 글자 이상 입력하세요!")
            textRef.current.focus();
        } else {
            alert(text);
            setText('');
        }
    }
    return (
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange}/>
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    );
}
export default UseRefs;