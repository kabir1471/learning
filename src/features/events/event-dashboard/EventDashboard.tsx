import { FC, useState } from "react"
import { Grid, GridColumn } from "semantic-ui-react"
import { event, sampleData } from "../../../app/api/data"
import EventForm from "../event-form/EventForm"
import EventList from "./EventList"

interface DashboardProps {
    formOpen: boolean;
    setFormOpen: (value: boolean) => void;
    handleSelectedEvent: (item: typeof event) => void;
    selectedEvent: typeof event
}

const EventDashboard: FC<DashboardProps> = ({formOpen, setFormOpen, handleSelectedEvent, selectedEvent}) => {
    const [events, setEvents] = useState(sampleData)
    
    const handleCreateEvent = (e: typeof event) => {
        setEvents([...events, e])
    }
    return (
        <Grid>
            <GridColumn width={10}>
                <EventList events={events} handleSelectEvent={handleSelectedEvent} />
            </GridColumn>
            <GridColumn width={6}>
                {formOpen && (
                    <EventForm setFormOpen={setFormOpen} handleCreateEvent={handleCreateEvent} selectedEvent={selectedEvent} />
                )}
            </GridColumn>
        </Grid>
    )
}

export default EventDashboard