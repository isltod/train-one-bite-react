import {useSearchParams} from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";

function Home() {
    const [searchParams, setSearchParams] = useSearchParams("");
    return (
        <div>
            <Header title={"Home"}
                    leftChild={
                        <Button type="positive"
                                text="긍정 버튼"
                                onClick={() => alert("positive button")}/>
                    }
                    rightChild={
                        <Button type="negative"
                                text="부정 버튼"
                                onClick={() => alert("negative button")}/>
                    }
            />
            <Editor onSubmit={(e) => alert("작성 완료 버튼을 클릭했음")} />
        </div>
    );
}

export default Home;