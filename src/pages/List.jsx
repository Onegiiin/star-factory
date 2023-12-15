import React, { useMemo, useState, useRef, useEffect} from 'react';
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
    const [hasSearchResults, setHasSearchResults] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [cards, setCards] = useState([]);
    const emptyResultsRef = useRef(null);

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
        const filteredCards = cards.filter(card =>
            card.text.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setHasSearchResults(filteredCards.length > 0); // Устанавливаем состояние наличия результатов поиска

        return filteredCards;
    }, [searchQuery, cards]);

    useEffect(() => {
        const handleResize = () => {
            if (!hasSearchResults && emptyResultsRef.current) {
                const windowHeight = window.innerHeight;
                const emptyResultsHeight = emptyResultsRef.current.clientHeight;
                const marginTopValue = (windowHeight - emptyResultsHeight) / 2;
                emptyResultsRef.current.style.marginTop = `${marginTopValue}px`;
            }
        };

        handleResize(); // Вызываем сразу для начальной установки

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [hasSearchResults]);

    return (
        <div className={`${classes.bgImg}`}>
            <Navbar/>
            <h2>Победители</h2>
            <div className={classes.ots}>
                <MyInput
                    className ={classes.poisk}
                    value={searchQuery}
                    placeholder="Введите свой запрос..."
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <div>
                    <div className={classes.scrollableContent}>
                        {hasSearchResults ? (
                            <CardList cards={sortedSearchList} />
                        ) : (
                            <div>
                                <span className={classes.emptyResults} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
                                    Результаты не найдены
                                </span>
                            <div
                                ref={emptyResultsRef}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                    height: '50%',
                                    fontFamily: 'Comfortaa',
                                    fontSize: '60px',
                                    letterSpacing: '0px',
                                    color: '#f4eaff',
                                    position: 'relative'
                                }}
                            >
                            </div>
                            </div>
                        )}
                    </div>
                </div>
                </div>
            <MyFooter className={classes.foot}/>
        </div>
    );
};

export default ListFin;
