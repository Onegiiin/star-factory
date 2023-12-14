import React from 'react';
import ClickableImageWithText from './ClickableImageWithText';

<<<<<<< HEAD

const images = {
    Card1: import('../utils/Card1.jpg'),
    Card2: import('../utils/Card2.jpg'),
    Card3: import('../utils/Card3.jpg'),
    Card4: import('../utils/Card4.jpg'),
    Card5: import('../utils/Card5.jpg'),
    Card6: import('../utils/Card6.jpg'),
    Card7: import('../utils/Card7.jpg')
};

=======
>>>>>>> f2ce75c (.)
const WeeklyImage = () => {
    const currentDay = new Date().getDay();

    const imagesData = [
        {
<<<<<<< HEAD
            imageUrl: images.Card1,
            text: 'Группа "Корни"'
        },
        {
            imageUrl: images.Card2,
            text: 'Полина Гагарина'
        },
        {
            imageUrl: images.Card3,
            text: 'Ирина Дубцова'
        },
        {
            imageUrl: images.Card4,
            text: 'Дмитрий Колдун'
        },
        {
            imageUrl: images.Card5,
            text: 'Анастасия Приходько'
        },
        {
            imageUrl: images.Card6,
            text: 'Виктория Дайнеко'
        },
        {
            imageUrl: images.Card7,
            text: 'Гузель Хасанова'
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
            text: imagesData[currentDay].text
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
        <div>
            <h2>Артист дня</h2>
=======
            imageUrl: 'ссылка_на_картинку_для_воскресенья',
            text: 'Карта для воскресенья'
        },
        {
            imageUrl: 'https://i.ytimg.com/vi/RCq05wJ7uck/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUNzlqJiesgBhtkbokpuOZRjsJcQ',
            text: 'Карта для понедельника'
        },
        {
            imageUrl: 'https://i.ytimg.com/vi/RCq05wJ7uck/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUNzlqJiesgBhtkbokpuOZRjsJcQ',
            text: 'Карта для вторника'
        },
        {
            imageUrl: 'https://i.ytimg.com/vi/RCq05wJ7uck/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUNzlqJiesgBhtkbokpuOZRjsJcQ',
            text: 'Карта для среды'
        },
        {
            imageUrl: 'ссылка_на_картинку_для_воскресенья',
            text: 'Карта для четверга'
        },
        {
            imageUrl: 'ссылка_на_картинку_для_воскресенья',
            text: 'Карта для пятницы'
        },
        {
            imageUrl: 'ссылка_на_картинку_для_субботы',
            text: 'Карта для субботы'
        }
    ];

    const currentImageData = imagesData[currentDay];

    return (
        <div>
>>>>>>> f2ce75c (.)
            <ClickableImageWithText imageUrl={currentImageData.imageUrl} text={currentImageData.text} />
        </div>
    );
};

export default WeeklyImage;
<<<<<<< HEAD

=======
>>>>>>> f2ce75c (.)
