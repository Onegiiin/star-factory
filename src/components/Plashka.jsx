import React from 'react';
import ClickableImageWithText from './ClickableImageWithText';
import {NavLink} from "react-router-dom";
const styles = {
    content: {
        justifyContent: 'left',
        alignItems: 'center',
        width: '1200px',
        textAlign: 'left',
        margin: '0px auto',
        padding: "20px",
        fontFamily: "Comfortaa",
        color: '#f4eaff',
        display:"flex",
        fontSize: "20px",
        backdropFilter: "blur(3px)",
        backgroundColor: 'rgba(12, 17, 23, 0.8)',
        textDecoration: 'none',
        pointerEvents: 'none'
    },

        borderedDivStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0px auto',
        width: '1204px',
        border: '2px solid gold',
    },
};


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
            persUrl: '/korni',
            shortInfo: 'Российская поп-рок группа, победившая в первом сезоне талант-шоу «Фабрика звёзд». В состав «Корней» тогда вошли Александр Бердников, Алексей Кабанов, Павел Артемьев и Александр Асташёнок. В качестве приза участники бойз-бенда получили символический подарок — микрофон, который использовался в записи «фабричных» композиций, а также контракт с центром Матвиенко, гастрольный тур по России и поездку во Францию на конкурс «Евробест», объединивший призеров международных «Фабрик».',
            born: "2002",

        },
        {
            imageUrl: images.Card2,
            text: 'Полина Гагарина',
            persUrl: '/gagarina',
            shortInfo: "Полина Сергеевна Гагарина — российская эстрадная певица, актриса кино, телевидения, озвучивания и дубляжа, композитор и фотомодель.",
            born: "27 марта 1987",
        },
        {
            imageUrl: images.Card3,
            text: 'Ирина Дубцова',
            persUrl: '/dubcova',
            shortInfo: "Ирина Викторовна Дубцова — российская певица, поэтесса и композитор, бывшая солистка группы «Девочки» (1999—2001). Исполнительница собственных песен (как сольных, так и совместных), выпускница и победительница «Фабрики звёзд — 4», финалистка проекта «Фабрика звёзд. Возвращение».",
            born: "14 февраля 1982",
        },
        {
            imageUrl: images.Card4,
            text: 'Дмитрий Колдун ',
            persUrl: '/koldun',
            shortInfo: "Дми́трий Алекса́ндрович Колду́н — белорусский певец, поэт и композитор. Представлял Беларусь на конкурсе Евровидение 2007 года с песней «Work Your Magic», заняв 6-е место (лучший результат Беларуси за всё время участия в конкурсе).",
            born: "11 июня 1985",
        },
        {
            imageUrl: images.Card5,
            text: 'Анастасия Приходько',
            persUrl: '/prihodko',
            shortInfo: "Анастаси́я Константи́новна Прихо́дько — украинская певица, автор песен, общественный и политический деятель, заслуженная артистка Украины (2017).",
            born: "21 апреля 1987",
        },
        {
            imageUrl: images.Card6    ,
            text: 'Виктория Дайнеко',
            persUrl: '/daineko',
            shortInfo: "Викто́рия Петро́вна Дайне́ко — российская певица и актриса. Победительница «Фабрики звёзд-5» (2004) и «Фабрики звёзд. Возвращение» (2011).",
            born: "12 мая 1987",
        },
        {
            imageUrl: images.Card7,
            text: 'Гузель Хасанова',
            persUrl: '/hasanova',
            shortInfo: "Гузель Хасанова — яркая и талантливая певица, заявившая о себе в качестве победительницы российского вокального проекта «Новая Фабрика звезд». С тех пор она регулярно радует поклонников новыми хитами, которые никого не оставляют равнодушным.",
            born: "28 января 1993",
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
            persUrl: imagesData[currentDay].persUrl,
            shortInfo: imagesData[currentDay].shortInfo,
            born: imagesData[currentDay].born,
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
            <div style={styles.borderedDivStyle}>
            <NavLink to={currentImageData.persUrl}>
            <ClickableImageWithText imageUrl={currentImageData.imageUrl} text={currentImageData.text} shortInfo={currentImageData.shortInfo} born={currentImageData.born}/>
            </NavLink>
            <p style={styles.content}>
                {currentImageData.shortInfo} Год рождения: {currentImageData.born}.
            </p>
            </div>
        </div>
    );
};

export default WeeklyImage;