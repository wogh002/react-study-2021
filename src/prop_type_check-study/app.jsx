import React from 'react';
import './index.css';
import Worker from './worker';
const user = {
    name: 'jaeho',
    career: 5,
    onCareerUp() {
        console.log(user.career);
    },
    isLeave: true,
}

const App = () => {
    return ( //return JSX
        <Worker user={user} />
    )
}
export default App;
