import React from "react";

function Body(props) {
    // 또는 Body({name, location})으로 사용
    // 여기서 주석은 리턴문의 html 내에서와는 다를 것이다...
    const {name, location} = props;
    console.log(props);
    const num = 999;
    let oddity = "홀수"
    if (num % 2 === 0) {
        oddity = "짝수";
    }
    const boolA = true;
    const boolB = false;
    const objA = {a: 1, b: 2};
    return (
        // 하나의 최상위 태그는 무조건 있어야 하고, 안하려면 <React.Fragment> - 이건 랜더링 안된다...
        <React.Fragment>
            <div>
                <h1>body</h1>
                <h2>{num}은(는) {num % 2 === 0 ? "짝수" : "홀수"}입니다.</h2>
                <h2>if문으로 판단하는 {num}은(는) {oddity}입니다.</h2>
                <h2>{num}</h2>
                {/*1. 중괄호로 감싸 줘야만 자바스크립트 자동완성이 동작한다.*/}
                {/*2. 불리언은 그냥 쏘면 랜더링되지 않고 String으로 문자로 바꿔줘야 한다...*/}
                <h2>{String(boolA || boolB)}</h2>
                {/*원시자료형(num, string, bool, null, undefined) 외에는 랜더링 안된다. 아래는 오류*/}
                {/*<h2>{objA}</h2>*/}
                {/*이건 된다...가급적 원시 자료형으로 보려고 한다는 얘기...*/}
                <h2>a: {objA.a}</h2>
            </div>
            <hr />
            <div className={"body2"}>{props.location}에 살고 있다는 {props.name}</div>
            {/*이렇게도 쓸 수 있다...*/}
            <div className={"body2"}>{location}에 살고 있다는 {name}</div>
        </React.Fragment>
    );
}

export default Body;