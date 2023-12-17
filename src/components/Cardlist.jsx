import React from 'react';
import ListElem from "./ListElem/listElem";

const CardList = ({cards}) => {
    return (
        <div>
            {cards.map(param =>
                <ListElem param={param} key ={param.id}/>
            )}
        </div>
    );
};

export default CardList;