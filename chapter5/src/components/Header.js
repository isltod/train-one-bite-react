// 이게 Header 컴포넌트...

// 스타일시트 import 문은 좀 다르다...이름없이 그냥 파일만...
import './header.css';

function Header() {
    return (
        // 아래 클래스 지정할 때 class 사용 못한다...자바스크립트 예약어라서...
        <header className="header">
            <h1>header</h1>
        </header>
    );
}
export default Header;