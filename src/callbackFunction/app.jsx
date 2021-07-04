import React, { Component } from 'react';
import './index.css';
import Lecturers from './lectures';
class App extends Component {
    //컴포넌트는 외부로부터 props 를 전달받는다
    constructor(props) {
        //this={};
        super(props);
        this.state = {
            FEML_lecturers: [
                {
                    id: 'lecturer-az01871',
                    name: '김데레사',
                    facebook: 'https://ko.reactjs.org/docs/events.html',
                    module: 'A',
                    image: "https://yamoo9.github.io/images/photo-yamoo@2x.png"
                },
                {
                    id: 'lecturer-az08888',
                    name: '야무',
                    module: 'B,C',
                    facebook: 'https://ko.reactjs.org/docs/events.html',
                    image: "https://yamoo9.github.io/images/photo-yamoo@2x.png"
                }
            ]
        }
    }

    removeLecturer = (removeId) => {
        const newLecturers = this.state.FEML_lecturers.filter(item => item.id !== removeId);
        this.setState({
            FEML_lecturers: newLecturers
        })
    }
    render() {
        //리액트 요소이다 즉, 아직 실제 dom 요소가 아니라 돔 조작 불가.
        return (
            <div className="app">
                <h1>
                    <a href="https://ko.reactjs.org/" rel="noopener noreferrer" target="_blank">
                        Front -End Masters 강사진
                    </a>
                </h1>
                <Lecturers instructors={this.state.FEML_lecturers} handleRemoveLecturer={this.removeLecturer} />
            </div>
        )
    }

}

export default App;
