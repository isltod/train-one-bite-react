import {useState} from "react";

function Inputs() {
    const [state, setState] = useState({
        name: "",
        birth: "",
        gender: "",
        bio: "",
    });

    function onChange(e) {
        console.log("현재 수정 대상: ", e.target.name);
        console.log("수정값: ", e.target.value);
        setState({...state, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <div><input name="name" onChange={onChange} placeholder="이름"/></div>
            <div>
                <select name="gender" onChange={onChange}>
                    <option key={""}></option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
            </div>
            <div><input type="date" name="birth" onChange={onChange}/></div>
            <div><textarea name="bio" onChange={onChange}></textarea></div>
        </div>
    );
}

export default Inputs;