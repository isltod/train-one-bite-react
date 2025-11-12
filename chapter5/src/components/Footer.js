function Footer() {
    return (
        <footer>
            {/*인라인 스타일링: 1 {}로 객체를 만들어 속성으로 정의, 2. background-color 안되고 backgroundColor로*/}
            <div style={{backgroundColor:'red', color: 'blue'}}>
                <h1>footer</h1>
            </div>
        </footer>
    );
}
export default Footer;