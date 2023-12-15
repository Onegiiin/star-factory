import React, { useMemo, useState } from 'react';
import CardList from '../components/Cardlist';
import MyInput from '../components/UI/MyInput/Myinput';
import classes from "./List.module.css";
import Navbar from "../components/Navbar";
import MyFooter from "../components/Myfooter";

const imagePaths = [
    'Card1.jpg',
    'Card2.jpg',
    'Card3.jpg',
    'Card4.jpg',
    'Card5.jpg',
    'Card6.jpg',
    'Card7.jpg'
];

const artistNames = [
    'Группа "Корни"',
    'Полина Гагарина',
    'Ирина Дубцова',
    'Дмитрий Колдун',
    'Анастасия Приходько',
    'Виктория Дайнеко',
    'Гузель Хасанова'
];

const persUrls = [
    '/korni',
    '/gagarina',
    '/dubcova',
    '/koldun',
    '/prihodko',
    '/daineko',
    '/hasanova'
];


const ListFin = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cards, setCards] = useState([]);

    const importImages = async () => {
        const importedImages = await Promise.all(
            imagePaths.map(imagePath => import(`../images/${imagePath}`))
        );
        return importedImages.map(module => module.default);
    };

    React.useEffect(() => {
        importImages().then(loadedImages => {
            const initialCards = loadedImages.map((imageUrl, index) => ({
                id: index + 1,
                text: artistNames[index],
                imageUrl: imageUrl,
                persUrl: persUrls[index]
            }));
            setCards(initialCards);
        });
    }, []);

    const sortedSearchList = useMemo(() => {
        return cards.filter(card =>
            card.text.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, cards]);

    return (
        <div className={`${classes.bgImg}`}>
            <Navbar/>
            <h2>Победители</h2>
            <div className={classes.ots}>
                <MyInput
                    value={searchQuery}
                    placeholder="Поиск..."
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <div>
                    <div className ={classes.scrollableContent}>
                        <CardList cards={sortedSearchList} />
                    </div>
                </div>
                </div>
            <MyFooter/>
        </div>
    );
};

export default ListFin;
