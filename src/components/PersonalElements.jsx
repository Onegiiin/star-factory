import React from 'react';
import Card from "./Card";
import ImageList from "./ImageList";

const PersonalElements = (props) => {
    return (
        <div>
            <Card info={props.info}></Card>
            <ImageList itemData={props.itemData}></ImageList>
            <iframe width="560" height="315" src={props.video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
    );
};

export default PersonalElements;