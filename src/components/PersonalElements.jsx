import React from 'react';
import Card from "./Card/Card";
import ImageList from "./ImageList/ImageList";
import CustomTimeline from "./CustomTimeLine/CustomTimeline";

const PersonalElements = (props) => {
    return (
        <div>
            <Card info={props.info}></Card>
            <CustomTimeline bio={props.bio} video={props.video}></CustomTimeline>
            <ImageList photos={props.photos}></ImageList>
        </div>
    );
};

export default PersonalElements;