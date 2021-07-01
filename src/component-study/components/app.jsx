import React from 'react';
import './index.css';
import DeliveryComment from './component-study/components/deliveryComment';

const users = [
    {
        avatarUrl: 'www.naver.com',
        rating: {
            score: 5,
            label: 'five star'
        },
        name: '이름은 재호',
        createdAt: '2021/07/02',
        content: '맛있어용!!'
    },
    {
        avatarUrl: 'www.naver.com',
        rating: {
            score: 1,
            label: 'one star..'
        },
        name: '이름은 A_유저',
        createdAt: '2021/07/02',
        content: '맛없네요.!!'
    }
    , {
        avatarUrl: 'www.naver.com',
        rating: {
            score: 3,
            label: 'three star~!'
        },
        name: '이름은 B_유저',
        createdAt: '2021/07/03',
        content: '적당합니다..'
    }
]
const App = () => {
    return ( //return JSX
        users.map(user => <DeliveryComment user={user} />)
    )
}
export default App;
