import React from 'react'
import ReactDOM from 'react-dom'

//조건문 처리할 함수.

// function conditionalRendering(usingList = false) {
//     //조건문 if
//     if (usingList) {
//         return (
//             <ul>
//                 <li>조건문 활용</li>
//                 <li>조건 식 (3항식,논리곱/합 연산자) 활용</li>
//             </ul>
//         )
//     }
//     else {
//         return <p>"조건문 활용" 또는 "조건 식 (3항식,논리곱/합 연산자) 활용"</p>
//     }
// }


//조건문 switch
function conditionalRendering(count = 0) {
    switch (count) {
        case 1:
            return (
                <ul>
                    <li>조건문 활용</li>
                    <li>조건 식 (3항식,논리곱/합 연산자) 활용</li>
                </ul>
            )
        case 2:
            return (
                <p>"조건문 활용" 또는 "조건 식 (3항식,논리곱/합 연산자) 활용"</p>
            )
        default: return (
            <p>
                React 의 <abbr title="JavaScript Syntax eXtension">JSX </abbr> 는 JavaScript 객체 (React 요소) 를 반환한다.
            </p>
        )
    }
}
function randomBoolean() {
    return Math.random() < 0.5 ? true : false;
}
function randomCount(number) {
    return number % 3; //0,1,2
}
function App() {
    return (
        <div className="app">
            <h1>조건부 렌더링</h1>
            {conditionalRendering(randomCount(Math.floor(100 * Math.random())))}
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
