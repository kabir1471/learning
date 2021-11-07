import React, { FC } from 'react'
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react'
import { event } from '../../../app/api/data'
import EventListAttendee from './EventListAttendee'

interface ItemProps{
    event: typeof event;
    handleSelectEvent: (item: typeof event) => void
}

const EventListItem: FC<ItemProps> = ({event, handleSelectEvent}) => {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description content={event.hostedBy} />
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" /> {event.date}
                    <Icon name="marker" /> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map((item, index) => (
                        <EventListAttendee key={item.id} attendee={item} />   
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>
                    {event.description}
                </div>
                <Button color="teal" floated="right" content="View" onClick={() => handleSelectEvent(event)} />
            </Segment>
        </Segment.Group>
    )
}

export default EventListItem
