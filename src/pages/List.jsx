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

    return (
        <div>
            <MyInput
            value = {searchQuery}
            onChange = {e => setSearchQuery(e.target.value)}
            />
            <CardList cards = {sortedSearchList}/>
        </div>
    );
};

export default List;