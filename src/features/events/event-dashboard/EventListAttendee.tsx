import React, { FC } from 'react'
import { Image, List } from 'semantic-ui-react'
import { attendee } from '../../../app/api/data'

interface AttendeeProps{
    attendee: typeof attendee 
}

const EventListAttendee: FC<AttendeeProps> = ({attendee}) => {
    return (
        <List.Item>
            <Image size="mini" circular  src={attendee.photoURL} />
        </List.Item>
    )
}

export default EventListAttendee
