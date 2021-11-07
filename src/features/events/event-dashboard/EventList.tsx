import { FC } from "react"
import { event, sampleData } from "../../../app/api/data"
import EventListItem from "./EventListItem"

interface props{
    events: typeof sampleData;
    handleSelectEvent: (item: typeof event) => void
}
const EventList: FC<props> = ({events, handleSelectEvent}) => {
    return (
        <>
            {events.map((item, index) => (
                <EventListItem key={item.id} event={item} handleSelectEvent={handleSelectEvent} />
            ))}
        </>
    )
}

export default EventList