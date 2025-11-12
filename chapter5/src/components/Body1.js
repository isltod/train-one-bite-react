import React from "react";

function Body1({name, location, favorList = []}) {
    console.log(name, location, favorList);
    return (
        <React.Fragment>
            <div>
                <p>{location}에 사는 {name}은 {favorList.length}개의 음식을 좋아합니다.</p>
            </div>
        </React.Fragment>
    );
}

export default Body1;