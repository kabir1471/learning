import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/event-dashboard/EventDashboard'
import Navbar from '../../features/nav/Navbar';
import { event } from '../api/data';
import './styles.css'
const App = () => {
  const [formOpen, setFormOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState({} as typeof event)
    const handleSelectEvent = (item: typeof event) => {
        setSelectedEvent(item);
        setFormOpen(true)
    }
    const handleFormOpen = (value: boolean) => {
      setFormOpen(value)
    }
  return (
    <>
      <Navbar setFormOpen={(value) => {setFormOpen(value)}} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={handleFormOpen} handleSelectedEvent={handleSelectEvent} selectedEvent={selectedEvent} />
      </Container>
    </>
  );
}

export default App;
