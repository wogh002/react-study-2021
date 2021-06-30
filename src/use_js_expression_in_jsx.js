const bindingContents = {
    number: 909,
    string: '콘텐츠 바인딩',
    howCanIuseJSexpressionInsideJSX() {
        //어떻게 내가 js표현식을 jsx안에서 사용하죠?
        return 'javaScript 식(expression)은 항상 값을 반환하므로 {} 안에 바인딩 가능합니다.'
    }
}
function App() {
    return (
        //개행 하고 싶을때 괄호 사용.
        <div className="app">
            <h1>NUMBER 값!? {bindingContents.number+1}</h1>
            {`${bindingContents.string} 하하핫`}
            {bindingContents.howCanIuseJSexpressionInsideJSX().replace(/\s/g,'-')}
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
