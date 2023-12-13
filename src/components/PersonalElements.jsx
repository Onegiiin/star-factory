import React from 'react';
import Card from "./UI/Card/Card";
import ImageList from "./ImageList";
import CustomTimeline from "./CustomTimeline";

const PersonalElements = (props) => {
    return (
        <div>
            <Card info={props.info}></Card>
            <CustomTimeline bio={props.bio}></CustomTimeline>
            <ImageList photos={props.photos}></ImageList>
            <iframe width="560" height="315" src={props.video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
    );
};

export default PersonalElements;