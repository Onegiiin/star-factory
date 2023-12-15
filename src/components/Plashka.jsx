import React from 'react';
import ClickableImageWithText from './ClickableImageWithText';
import {NavLink} from "react-router-dom";


const images = {
    Card1: import('../images/Card1.jpg'),
    Card2: import('../images/Card2.jpg'),
    Card3: import('../images/Card3.jpg'),
    Card4: import('../images/Card4.jpg'),
    Card5: import('../images/Card5.jpg'),
    Card6: import('../images/Card6.jpg'),
    Card7: import('../images/Card7.jpg')
};

const WeeklyImage = () => {
    const currentDay = new Date().getDay();

    const imagesData = [
        {
            imageUrl: images.Card1,
            text: 'Группа "Корни"',
            persUrl: '/korni'
        },
        {
            imageUrl: images.Card2,
            text: 'Полина Гагарина',
            persUrl: '/gagarina'
        },
        {
            imageUrl: images.Card3,
            text: 'Ирина Дубцова',
            persUrl: '/dubcova'
        },
        {
            imageUrl: images.Card4,
            text: 'Дмитрий Колдун ',
            persUrl: '/koldun'
        },
        {
            imageUrl: images.Card5,
            text: 'Анастасия Приходько',
            persUrl: '/prihodko'
        },
        {
            imageUrl: images.Card6    ,
            text: 'Виктория Дайнеко',
            persUrl: '/daineko'
        },
        {
            imageUrl: images.Card7,
            text: 'Гузель Хасанова',
            persUrl: '/hasanova'
        }
    ];

    const getImage = async (image) => {
        const imageModule = await image;
        return imageModule.default || imageModule;
    };

    const getCurrentImageData = async () => {
        const currentImage = imagesData[currentDay].imageUrl;
        const resolvedImage = await getImage(currentImage);
        return {
            imageUrl: resolvedImage,
            text: imagesData[currentDay].text,
            persUrl: imagesData[currentDay].persUrl
        };
    };

    const [currentImageData, setCurrentImageData] = React.useState(null);

    React.useEffect(() => {
        getCurrentImageData().then(data => {
            setCurrentImageData(data);
        });
    }, [currentDay]);

    if (!currentImageData) {
        return <div>Loading...</div>;
    }

    return (
        <div id="homepage">
            <h2>Артист дня</h2>
            <NavLink to={currentImageData.persUrl}>
            <ClickableImageWithText imageUrl={currentImageData.imageUrl} text={currentImageData.text} />
            </NavLink>
        </div>
    );
};

export default WeeklyImage;