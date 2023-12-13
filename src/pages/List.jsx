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

    return (
        <div>
            <MyInput
                value={searchQuery}
                placeholder="Поиск..."
                onChange={e => setSearchQuery(e.target.value)}
            />
            <h2>Победители</h2>
            <CardList cards={sortedSearchList} />
        </div>
    );
};

export default List;
