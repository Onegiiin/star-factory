import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function CustomTimeline(props) {
    return (
        <Timeline position="alternate-reverse">
            {props.bio.map((curr, ind) =>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        {curr.time}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot
                            variant="outlined"
                            color={ind % 2 === 0 ? "primary" : "secondary"}
                        />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{curr.event}</TimelineContent>
                </TimelineItem>
            )}
        </Timeline>
    );
}