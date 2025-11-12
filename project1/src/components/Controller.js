function Controller({handleSetCount}) {
    // 이런 식으로도 할 수 있고, 나는 이게 편한데...
    // function passControlValue(e) {
    //     const value = Number.parseInt(e.target.value);
    //     handleSetCount(value);
    // }
    return (
        <div>
            {/*<button value={-1} onClick={passControlValue}>-1</button>*/}
            <button onClick={() => handleSetCount(-1)}>-1</button>
            <button onClick={() => handleSetCount(-10)}>-10</button>
            <button onClick={() => handleSetCount(-100)}>-100</button>
            <button onClick={() => handleSetCount(100)}>+100</button>
            <button onClick={() => handleSetCount(10)}>+10</button>
            <button onClick={() => handleSetCount(1)}>+1</button>
        </div>
    )
}

export default Controller;