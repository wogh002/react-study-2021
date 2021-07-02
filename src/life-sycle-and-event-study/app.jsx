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
        console.log(document.querySelector('h1'));
        console.log('App 컴포넌트 생성 시점', props, this.state);
        //return this;
    }

    static getDerivedStateFromProps(props, state) {
        console.log('state,props 파생(디라이브) 시점.');
        //return {컴포넌트 state 업데이트해준다.}
        return {
            infrequentlyUsed: true
        };
    }
    // static getDerivedStateFromError(error) {
    //     return {
    //         hasError: true,
    //     }
    // }
    otherMember() {
        console.log('other member!!@');
    }
    handleLinkClick = (e) => {
        console.log(e.target);
        console.log(this);
        this.otherMember();
    }
    render() {
        //리액트 요소이다 즉, 아직 실제 dom 요소가 아니라 돔 조작 불가.
        return (
            <div className="app">
                <h1>
                    <a href="https://ko.reactjs.org/" onClick={this.handleLinkClick} rel="noopener noreferrer" target="_blank">
                        Front -End Masters 강사진
                    </a>
                </h1>
                {
                    this.state.FEML_lecturers.map(item => <Lecturers key={item.id} instructor={item} />)
                }

            </div>
        )
    }
    componentDidMount() {
        //가상돔이 실제 dom에 마운트 된 후.
        //돔요소에 마운트 된 후 

    }
}

// 
// 라이프 사이클 메서드	설명 (2.업데이트)
// static getDerivedStateFromProps()(opens new window)	전달된 상태 및 속성을 가져와 설정하는 시점에 호출 (업데이트)
// shouldComponentUpdate()(opens new window)	컴포넌트 업데이트 예정 시점에 호출 (업데이트 하거나, 안 하거나)
// render()(opens new window)	컴포넌트 렌더링 (업데이트)
// getSnapshotBeforeUpdate()(opens new window)	컴포넌트 업데이트 전 스냅샷 가져오는 시점에 호출
// componentDidUpdate()(opens new window)	컴포넌트 업데이트 이후 시점에 호출

export default App;
