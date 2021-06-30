import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
const numbers = [500, 50, 5, 0.5];
function App() {
    return (
        <div className="app">
            <h1>리스트 렌더링</h1>
            <ul>
                {
                    numbers.map((item, index) => <li key={index}> {item * 2} </li>)
                }
            </ul>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
