import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
let usingList = true;
let usingBorderColor = true;

const a11y = {
    hiddenClass : 'ally-hidden'
}
function App() {
    return (
        <div>
            <h1 className={a11y.hidden|| null}>조건부 렌더링</h1>
            {
                usingList ?
                    <ul>
                        <li>조건문 활용</li>
                        <li className={`bordered ${usingBorderColor ? 'bordered-red' : ''}`.trim()}>조건식 (3항식,논리곱/합 연산자) 활용</li>
                    </ul>
                    :
                    <p>"조건문 활용" 또는 "조건 식 (3항식,논리곱/합 연산자) 활용"</p>
            }
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
