import React from 'react';
import PropTypes from 'prop-types';

const Worker = (props) => {
    console.log(props);
    return (
        <div className="worker">
            <span className="worker-name">{props.user.name}</span>
            <span className="worker-career">{props.user.career}</span>
            <span className="worker-isLeave">{!props.user.isLeave || '재직'}</span>
            <button type="button" onClick={props.user.onCareerUp}>커리어 업</button>
        </div>
    )
}
// npm i prop-types 다운먼저 받자.
// 전달 속성 유효성 검사
//컴포넌트명.propTypes ->p 소문자
Worker.propTypes = {
    name: PropTypes.string.isRequired,
}
//isRequired 반드시 있어야한다 없으면 에러 발생시킴.

// 타입	검사 방법
// 모든 타입	PropTypes.any
// Number 객체	PropTypes.number
// String 객체	PropTypes.string
// Boolean 객체	PropTypes.bool
// Function 객체	PropTypes.func
// Array 객체	PropTypes.array
// Object 객체	PropTypes.object
// Symbol 객체	PropTypes.symbol
// Node 객체	PropTypes.node
// React 요소	PropTypes.element
// React 컴포넌트	PropTypes.elementType
// 여러 타입 중 하나	PropTypes.oneOfType([PropType.number, PropType.string])
// 특정 클래스의 인스턴스	PropTypes.instanceOf(Date)
// 전달 속성 제한	PropTypes.oneOf(['name', 'career'])
// 특정 타입 집합으로 제한	PropTypes.arrayOf(PropTypes.string)
// 특정 타입을 속성 값으로 하는 객체 제한	PropTypes.objectOf(PropTypes.number)
// 특정 형태를 갖는 객체 제한	PropTypes.shape({ prop1, prop2 })

export default Worker;