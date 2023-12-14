<<<<<<< HEAD
import React, { useMemo, useState } from 'react';
import CardList from "../components/Cardlist";
import MyInput from "../components/UI/MyInput/Myinput";

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

const List = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cards, setCards] = useState([]);

    const importImages = async () => {
        const importedImages = await Promise.all(
            imagePaths.map(imagePath => import(`../utils/${imagePath}`))
        );
        return importedImages.map(module => module.default);
    };

    React.useEffect(() => {
        importImages().then(loadedImages => {
            const initialCards = loadedImages.map((imageUrl, index) => ({
                id: index + 1,
                text: artistNames[index],
                imageUrl: imageUrl
            }));
            setCards(initialCards);
        });
    }, []);

    const sortedSearchList = useMemo(() => {
        return cards.filter(card => card.text.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, cards]);
=======
import React, {useMemo, useRef, useState} from 'react';
import CardList from "../components/Cardlist";
import MyInput from "../components/UI/MyInput/Myinput";

const List = () => {
    const [searchQuery, setSearchQuery] =useState()
    const [cards,setCards] = useState(
        [{id: 1, text: 'первый', imageUrl: 'https://i.ytimg.com/vi/RCq05wJ7uck/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUNzlqJiesgBhtkbokpuOZRjsJcQ'},
            {id: 2, text: 'второй', imageUrl: 'https://i.ytimg.com/vi/RCq05wJ7uck/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUNzlqJiesgBhtkbokpuOZRjsJcQ'},
            {id: 3, text: 'третий', imageUrl: 'https://i.ytimg.com/vi/RCq05wJ7uck/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUNzlqJiesgBhtkbokpuOZRjsJcQ'},
            {id: 4, text: 'четвёртый', imageUrl: 'https://i.ytimg.com/vi/RCq05wJ7uck/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUNzlqJiesgBhtkbokpuOZRjsJcQ'},
            {id: 5, text: 'пятый', imageUrl: 'https://i.ytimg.com/vi/RCq05wJ7uck/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUNzlqJiesgBhtkbokpuOZRjsJcQ'},
            {id: 6, text: 'шестой', imageUrl: 'https://i.ytimg.com/vi/RCq05wJ7uck/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUNzlqJiesgBhtkbokpuOZRjsJcQ'},
            {id: 7, text: 'седьмой', imageUrl: 'https://i.ytimg.com/vi/RCq05wJ7uck/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUNzlqJiesgBhtkbokpuOZRjsJcQ'},]
    )

    const sortedSearchList = useMemo(() => {
        return cards.filter(cards => cards.text.includes(searchQuery))
    },[searchQuery,cards])
>>>>>>> f2ce75c (.)

    return (
        <div>
            <MyInput
<<<<<<< HEAD
                value={searchQuery}
                placeholder="Поиск..."
                onChange={e => setSearchQuery(e.target.value)}
            />
            <h2>Победители</h2>
            <CardList cards={sortedSearchList} />
=======
            value = {searchQuery}
            onChange = {e => setSearchQuery(e.target.value)}
            />
            <CardList cards = {sortedSearchList}/>
>>>>>>> f2ce75c (.)
        </div>
    );
};

<<<<<<< HEAD
export default List;
=======
export default List;
>>>>>>> f2ce75c (.)
