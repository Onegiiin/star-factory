import React from 'react';
import PersonalElements from "../components/PersonalElements";

const Gagarina = () => {
    return (
        <div>
            <PersonalElements info={info} photos={photos} video={video} bio={bio}/>
        </div>
    );
};

<<<<<<< HEAD
const info = [];
const bio = [];
const photos = [];
const video = "";
=======
const info = {
    name: "Полина Гагарина",
    gender: "woman",
    mainImg: "../images/gagarina/main.jpg",
    season: 3,
    shortInfo: "Полина Сергеевна Гагарина — российская эстрадная певица, актриса кино, телевидения, озвучивания и дубляжа, композитор и фотомодель.",
    born: "27 марта 1987",
    death: "настоящее время"
};
const bio = [
    {
        time: "27 марта 1987",
        event: [
            "Рождение Полины Гагариной в Москве."
        ]
    },
    {
        time: "Детство в Греции",
        event: [
            "Провела детство в Греции, где ее мать, профессиональная танцовщица, работала в балете \"Алсос\" в Афинах."
        ]
    },
    {
        time: "1991",
        event: [
            "Мать подписывает контракт с греческим продюсером на работу артисткой балета, и Полина переезжает в Афины, где проживает три года."
        ]
    },
    {
        time: "Сентябрь 1993",
        event: [
            "Полина возвращается в Россию и остается жить в Саратове по настоянию бабушки. Поступает в музыкальную школу."
        ]
    },
    {
        time: "2003",
        event: [
            "Поступление в Государственное музыкальное училище эстрадно-джазового искусства после окончания музыкальной школы.",
            "Предложение участвовать в музыкальном телепроекте \"Фабрика звёзд\" от педагога Натальи Андрияновой.",
            "Участие в \"Фабрике звёзд\"."
        ]
    },
    {
        time: "2004—2007",
        event: [
            "Начало карьеры и альбом \"Попроси у облаков\".",
            "Подписание контракта с лейблом АРС Records. Участие в конкурсе \"Новая волна\", где занимает третье место с песней \"Колыбельная\".",
            "Выход клипа на песню \"Я твоя\" и сингла \"Помню\". Поступление в Школу-студию МХАТ. Первый сольный концерт в Москве.",
            "Запись сингла \"Я тебя не прощу никогда\". 12 июля выход дебютного альбома \"Попроси у облаков\" с хитами \"Колыбельная\", \"Я твоя\" и \"Я тебя не прощу никогда\"."
        ]
    },
    {
        time: "2008—2010",
        event: [
            "Альбом \"О себе\".",
            "Запись песни \"Кому, зачем?\" с Ириной Дубцовой.",
            "Выход второго сольного альбома \"О себе\" с песнями \"Кому, зачем?\", \"Любовь под солнцем\" и \"Где-то живёт любовь\".",
            "Победа на премии \"Муз-ТВ 2010\" в номинации \"Лучший дуэт\" за композицию \"Кому, зачем?\" вместе с Ириной Дубцовой.",
            "Окончание учебы в Школе-студии МХАТ."
        ]
    },
    {
        time: "Весна 2011",
        event: [
            "Участие в украинском музыкальном шоу \"Народная звезда — 4\", где исполняла дуэты с участниками из народа, победа в дуэте с одесситом Михаилом Димовым."
        ]
    },
    {
        time: "Апрель 2011",
        event: [
            "Выход молодежного сериала \"Большие надежды\" с песней \"Я обещаю\" в качестве официального саундтрека."
        ]
    },
    {
        time: "Август 2011",
        event: [
            "Получение \"Золотого граммофона\" за песню \"Я тебя не прощу никогда\" от \"Русского радио Украина\"."
        ]
    },
    {
        time: "Конец 2011",
        event: [
            "Выход сингла \"Осколки\" и клипа на него."
        ]
    },
    {
        time: "Январь 2012",
        event: [
            "Выход нового сингла \"Спектакль окончен\" с соответствующим клипом."
        ]
    },
    {
        time: "Лето 2012",
        event: [
            "Участие в телепроекте \"Фабрика звёзд.\", где Гагарина выиграла три поединка из четырех, поддерживая команду России. Также становление послом XXVII Всемирной летней Универсиады 2013 года в Казани."
        ]
    },
    {
        time: "Август 2012",
        event: [
            "Выход сингла \"Нет\" с соответствующим клипом."
        ]
    },
    {
        time: "Сентябрь 2012",
        event: [
            "Победа на премии RU.TV в номинации \"Лучший рингтон\" за композицию \"Спектакль окончен\".",
            "Озвучивание героини Мэвис в мультфильме \"Монстры на каникулах\".",
            "Получение \"Золотого граммофона\" за песню \"Спектакль окончен\". Участие в телефестивале \"Песня года 2012\". Песня \"Спектакль окончен\" включена в список лучших песен 2012 года на проекте \"Красная Звезда\".",
            "Ведение ток-шоу \"Вкусно жить\" на канале ТНТ."
        ]
    },
    {
        time: "Апрель 2013",
        event: [
            "Получение приза \"Sexy Ж\" на церемонии \"Звуковая дорожка 2013\"."
        ]
    },
    {
        time: "Май 2013",
        event: [
            "Победа в номинации \"Лучшая исполнительница\" на премии RU.TV."
        ]
    },
    {
        time: "Июнь 2013",
        event: [
            "Победа в номинации \"Прорыв года\" на телеканале МУЗ-ТВ.",
            "Новый сингл \"Навек\"."
        ]
    },
    {
        time: "2014",
        event: [
            "Премьера песни \"Шагай\". Выход первого англоязычного сингла \"DAY\" в сотрудничестве с Антоном Беляевым."
        ]
    },
    {
        time: "Март 2015",
        event: [
            "Анонс участия в конкурсе \"Евровидение-2015\" от России с песней \"A Million Voices\". Участие в шоу \"Точь-в-точь\"."
        ]
    },
    {
        time: "19 мая 2015",
        event: [
            "Победа в первом полуфинале \"Евровидения-2015\" с песней \"A Million Voices\"."
        ]
    },
    {
        time: "23 мая 2015",
        event: [
            "Занятие второго места в финале \"Евровидения-2015\"."
        ]
    },
    {
        time: "Июнь 2015",
        event: [
            "Завершение сотрудничества с Константином Меладзе."
        ]
    },
    {
        time: "Июль 2015",
        event: [
            "Выступление с песней \"A Million Voices\" на жеребьевке отборочного турнира чемпионата мира по футболу 2018 года и на церемонии закрытия чемпионата мира по водным видам спорта в Казани."
        ]
    },
    {
        time: "Сентябрь 2015",
        event: [
            "Участие в телепроекте \"Голос\" на Первом канале в качестве наставника. Выход нового сингла \"Я не буду\" и клипа на него."
        ]
    },
    {
        time: "Октябрь 2015",
        event: [
            "Вновь становление наставником в шоу \"Голос\"."
        ]
    }
];
const photos = [
    {
        img: "../images/gagarina/1.jpg",
        title: 'Победа на RU.TV',
        featured: true,
    },
    {
        img: '../images/gagarina/2.png',
        title: 'Евровиденье-2015',
    },
    {
        img: '../images/gagarina/3.png',
        title: 'Новосибирск',
    },
    {
        img: '../images/gagarina/4.png',
        title: 'Челябинск',
    },
    {
        img: '../images/gagarina/5.png',
        title: 'Минск',
    },
    {
        img: '../images/gagarina/6.png',
        title: 'Шоу \"Голос\"',
    },
    {
        img: '../images/gagarina/7.png',
        title: 'Музыкальное шоу \"Навсегда\"',
    }

];
const video = "https://www.youtube.com/watch?v=V94vZTNkLng";

>>>>>>> f2ce75c (.)




export default Gagarina;