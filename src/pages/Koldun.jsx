import React from 'react';
import PersonalElements from "../components/PersonalElements";

const Koldun = () => {
    return (
        <div>
            <PersonalElements info={info} photos={photos} video={video} bio={bio}/>
        </div>
    );
};

const info = {
    name: "Дмитрий Колдун",
    gender: "man",
    mainImg: "https://www.passion.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2021/09/16/09/4896363/a370529b57a7b11d44a834fa4b51ddbc099c3f65.jpg",
    season: 6,
    shortInfo: "Дми́трий Алекса́ндрович Колду́н — белорусский певец, поэт и композитор. Представлял Беларусь на конкурсе Евровидение 2007 года с песней «Work Your Magic», заняв 6-е место (лучший результат Беларуси за всё время участия в конкурсе).",
    born: "11 июня 1985",
    death: "настоящее время"
}

const bio = [
    {time: "2023", event: "пусто"},
    {time: "2023", event: "недопуск из-за рпи"},
];

const photos = [
    {
        img: 'https://www.vkpress.ru/upload/iblock/b68/b6852f425de87f7f1b6d355f391c8b21.jpg',
        title: 'Краснодар',
        featured: true,
    },
    {
        img: 'https://i.pinimg.com/564x/01/08/21/0108211aab68b56cbf0d7c23fb7f9cf7.jpg',
        title: 'Фабрика звезд',
    },
    {
        img: 'https://showbi.ru/upload/2021/11/02/20211102144304-ae306648.jpg',
        title: 'Авторадио',
    },
    {
        img: 'https://api.delfi.lt/media-api-image-cropper/v1/0fa3e900-7a86-11ed-bbfd-e17f1d900260.jpg?noup&w=1200&h=711&fx=0.5&fy=0.25',
        title: 'Золотой граммофон',
    },
    {
        img: 'https://gp.by/upload/medialibrary/d78/d7898e2874f176f0c02d6e3a24e30928.jpg',
        title: 'Гомель',
    },
    {
        img: 'https://avatars.dzeninfra.ru/get-zen_doc/96506/pub_5c6ae908170ed700ae1963e1_5c6ae983fec61f00b2b842d3/scale_1200',
        title: 'Русское радио',
        featured: true,
    },
    {
        img: 'https://s.ura.news/760/images/news/upload/news/558/780/1052558780/24621_Final_Miss_Ekaterinburg_2013_koldun_dmitriy_250x0_5184.3456.0.0.jpg',
        title: 'Нижневартовск',
    },
    {
        img: 'https://www.womanhit.ru/media/CACHE/images/articleimage2/2020/3/a56f32357347/7adf65ab5bee59f2c92f9a92f7c9d88e.jpg',
        title: 'Евровидение',
    },
];

const video = "https://www.youtube.com/embed/Igp6p7sTT_4?si=lkfU-1tx6RqDm0VI";

export default Koldun;