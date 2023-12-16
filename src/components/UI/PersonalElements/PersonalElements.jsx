import React from 'react';
import Card from "../Card/Card";
import ImageList from "../ImageList/ImageList";
import CustomTimeline from "../CustomTimeLine/CustomTimeline";
import classes from "./PersonalElements.module.css"

const PersonalElements = (props) => {
    return (
        <div>
            <Card info={props.info}></Card>
            <CustomTimeline bio={props.bio}></CustomTimeline>
            <ImageList photos={props.photos}></ImageList>
            <iframe className={classes.yt} src={props.video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
    );
};

export default PersonalElements;