import React, {useState} from 'react';
import ImageList from '../components/ImageList.jsx';
import Card from "../components/Card";

const Koldun = () => {
    const [value, setValue] = useState('initial');
    const [info, setInfo] = useState({
        name: "Дмитрий Колдун",
        gender: "man",
        mainImg: "https://www.passion.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2021/09/16/09/4896363/a370529b57a7b11d44a834fa4b51ddbc099c3f65.jpg",
        season: 6,
        shortInfo: "Дми́трий Алекса́ндрович Колду́н — белорусский певец, поэт и композитор. Представлял Беларусь на конкурсе Евровидение 2007 года с песней «Work Your Magic», заняв 6-е место (лучший результат Беларуси за всё время участия в конкурсе).",
        born: "11 июня 1985",
        death: "настоящее время"
    })
    return (
        <div>
            <Card info={info}></Card>
            <ImageList></ImageList>
        </div>
    );
};

export default Koldun;