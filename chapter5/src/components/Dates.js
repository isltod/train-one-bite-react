import {useState} from "react";

function Dates() {
    const [date, setDate] = useState(new Date());
    function handleOnChange(e) {
        console.log("변경된 값: " + e.target.value);
        setDate(e.target.value);
    }

    return (
        <div>
            <input type="date" onChange={handleOnChange}/>
        </div>
    );
}
export default Dates;