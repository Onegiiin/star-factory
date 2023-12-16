import React from 'react';
import Card from "./UI/Card/Card";
import ImageList from "./UI/ImageList/ImageList";
import CustomTimeline from "./UI/CustomTimeLine/CustomTimeline";

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