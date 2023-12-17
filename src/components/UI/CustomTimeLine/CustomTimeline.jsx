import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import classes from './CustomTimeline.module.css'
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "react-responsive";


export default function CustomTimeline(props) {
    const { t, i18n } = useTranslation();
    const isMobile = useMediaQuery({ maxWidth: 720 });

    return (
        <div className={classes.TimeLineContainer}>
            <h2>{t("timeline.bio")}</h2>
            <Timeline position={isMobile?"right":"alternate-reverse"}>
                {props.bio.map((curr, ind) =>
                    <TimelineItem>
                        <TimelineOppositeContent style={isMobile?{ maxWidth: "70px", paddingLeft: '0px' }: {}}>
                            <time className={classes.time}>{t(curr.time)}</time>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot
                                variant="outlined"
                                sx = {{border: '2px solid gold'}}
                            />
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            {curr.event.map((part, partIndex) =>
                                <React.Fragment key={partIndex}>
                                    <p>{t(part)}</p>
                                </React.Fragment>
                            )}
                        </TimelineContent>
                    </TimelineItem>
                )}
            </Timeline>
            <iframe className={classes.yt} src={props.video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
    )
}