import React from 'react';
import ClickableImageWithText from './ClickableImageWithText';

const WeeklyImage = () => {
    const currentDay = new Date().getDay();

    const imagesData = [
        {
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
            <ClickableImageWithText imageUrl={currentImageData.imageUrl} text={currentImageData.text} />
        </div>
    );
};

export default WeeklyImage;
