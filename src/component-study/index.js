import ReactDOM from 'react-dom'
import App from './app';
const FEML_lecturers = [
    {
        id: 'lecturer-az01871',
        name: 'aaaa',
        facebook: 'https://www.aaaaaa.com',
        module: 'A',
        image: "https://yamoo9.github.io/images/photo-yamoo@2x.png"
    },
    {
        id: 'lecturer-az08888',
        name: 'bbbbbb',
        module: 'B,C',
        facebook: 'https://wwwwwwww.bbbbbb.com',
        image: "https://yamoo9.github.io/images/photo-yamoo@2x.png"
    }
]

ReactDOM.render(<App lecturers={FEML_lecturers} />, document.getElementById('root'));
