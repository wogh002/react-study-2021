import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const state = {
    appClass: 'app'
}
const listStlye = {
    color: '#ea2266',
    fontWeight: 900
};
let borderColor = 'green';

function App() {
    return (
        <div className={state.appClass}>
            <h1>속성 컴파일</h1>
            <ul>
                <li style={{ color: '#0066ff', fontWeight: 900 }}> 스타일 속성(인라인)</li>
                <li style={listStlye}>스타일 속성(객체)</li>
                <li className="ally-hidden">클래스 속성(객체)</li>
                <li className="bordered rounded">클래스 속성(객체)</li>
                <li className={`rounded bordered bordered-${borderColor}`}>클래스 속성(동적 처리)</li>
            </ul>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
