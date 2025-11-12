function ButtonClick() {
    function handleClick(e) {
        console.log(e);
        alert(e.target.name);
    }
    return (
        <div>
            <button name={"A버튼"} onClick={handleClick}>A 버튼</button>
            <button name={"B버튼"} onClick={handleClick}>B 버튼</button>
        </div>
    )
}

export default ButtonClick