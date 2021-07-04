import React, { Component } from 'react';
import './index.css';
import LectureContext from './context/lectureContext';
import AppHeader from './layout/appHeader';
import AppMain from './layout/appMain';

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
        // const { FEML_lecturers } = this.state;
        return (
            <LectureContext.Provider value={{
                lectures: this.state.FEML_lecturers,
                removeLecture: this.removeLecturer,
            }}>
                <div className="app">
                    <AppHeader title='강사진' />
                    <AppMain />
                </div>
            </LectureContext.Provider>
        )
    }

}

export default App;
