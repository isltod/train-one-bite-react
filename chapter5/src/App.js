import './App.css';
import Header from './components/Header';
import Body from "./components/Body";
import Footer from "./components/Footer";
import Body1 from "./components/Body1";
import Body2 from "./components/Body2";
import ButtonClick from "./components/ButtonClick";
import ChangeState from "./components/ChangeState";
import Inputs from "./components/Inputs";
import Oddity from "./components/Oddity";
import UseRefs from "./components/UseRefs";

function App() {
    console.log("App 랜더링...")
    let BodyProps = {};
    BodyProps.name = "wolf";
    BodyProps.location = "수원";

    function ChildComp() {
        return <div>child component</div>
    }

    return (
        <div className="App">
            <Header/>
            <UseRefs/>
            <Body {...BodyProps} />
            <Body1 {...BodyProps} />
            <Body2>
                <ChildComp/>
            </Body2>
            <ButtonClick />
            <ChangeState />
            <Inputs />
            <Oddity />
            <Footer/>
        </div>
    );
}

export default App;
