import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import classes from './CustomTimeline.module.css'

export default function CustomTimeline(props) {
    return (
        <div className={classes.TimeLineContainer}>
            <Timeline position="alternate-reverse">
                {props.bio.map((curr, ind) =>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <time className={classes.time}>{curr.time}</time>
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
                                    <p>{part}</p>
                                </React.Fragment>
                            )}
                        </TimelineContent>
                    </TimelineItem>
                )}
            </Timeline>
        </div>
    )
        ;
}